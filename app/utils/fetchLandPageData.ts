import { prismaGeneralDb } from '../db/dbMain';
import { dateNowToServer } from './utilityFunctions';

export const fetchLandPageData = async (landPageRowId: string) => {
    try {
        if (!landPageRowId) {
            console.warn('No LandPageRowId provided.');
            return null;
        }

        const landPage = await prismaGeneralDb.landPages.findUnique({
            where: {
                LandPageRowId: landPageRowId,
            },
        });

        if (!landPage?.ViewDate) {
            await prismaGeneralDb.landPages.update({
                where: { LandPageRowId: landPageRowId },
                data: { ViewDate: dateNowToServer() }
            });
        }

        return landPage;
    } catch (error) {
        console.error('Error fetching landing page or company:', error);
        return null;
    }
};
