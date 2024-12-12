import { prismaGeneralDb } from '@/app/db/dbMain';
import { NextRequest, NextResponse } from 'next/server';

// Route to add a user to the users array in the JsonData
//
const addUserToJsonData = async (landPageRowId: string, user: any) => {
    try {
        // Fetch the current JSON data from the database
        // we do this to check if the new user already exists
        // and to add a user to the existing users array rather then 
        // overwriting the existing data.
        //
        const existingLandPage = await prismaGeneralDb.landPages.findUnique({
            where: { LandPageRowId: landPageRowId },
        });

        let currentData;

        if (!existingLandPage) {
            throw new Error('LandPage not found or JsonData is missing.');
        } else if (!existingLandPage.JsonData) {
            // Initialize the JSON data if it's missing in the table row
            //
            currentData = { users: [] };
        } else {
            // Parse the current JSON data if it does exist in the table row
            //
            currentData = JSON.parse(existingLandPage.JsonData);
        }

        const userExists = currentData.users.some((userFromDb: any) =>
            userFromDb.EmployeeIdentity === user.EmployeeIdentity || userFromDb.Email === user.Email
        );

        if (userExists) {
            throw new Error('User already exists');
        }

        // Add the new user to the `users` array
        //
        currentData.users = Array.isArray(currentData.users) ? currentData.users : []; // Ensure `users` array exists
        currentData.users.push(user);

        // Update the database row with the modified JSON
        //
        const updatedLandPage = await prismaGeneralDb.landPages.update({
            where: { LandPageRowId: landPageRowId },
            data: {
                JsonData: JSON.stringify(currentData), // Save the updated JSON
            },
        });

        return updatedLandPage;
    } catch (error) {
        console.error('Error updating JsonData:', error);
        throw error;
    }
};

// API handler for the POST request to add a new user
//
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { LandPageRowId, user } = body;

        if (!LandPageRowId || !user) {
            return NextResponse.json(
                { error: 'LandPageRowId and user data are required.' },
                { status: 400 }
            );
        }

        // Use the utility function to add the user to the JSON data
        const updatedLandPage = await addUserToJsonData(LandPageRowId, user);

        return NextResponse.json(
            { message: 'User added successfully.', updatedLandPage },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating landPage:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
