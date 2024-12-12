import { prismaGeneralDb } from '../db/dbMain';
import { dateNowToServer } from './utilityFunctions';

export const fetchProducts = async () => {
  try {
    return await prismaGeneralDb.products.findMany();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchLandings = async (landPageRowId: string) => {
  try {
    if (!landPageRowId) {
      console.warn('No LandPageRowId provided.');
      return null;
    }

    const landPage = await prismaGeneralDb.landPages.findUnique({
      include: {
        Companies: true
      },
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

    return { companyData: landPage?.Companies, landPageData: landPage }
  } catch (error) {
    console.error('Error fetching landing page or company:', error);
    return null;
  }
};
