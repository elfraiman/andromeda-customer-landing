import { prismaGeneralDb } from '../db/dbMain';

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
      where: {
        LandPageRowId: landPageRowId,
      },
    });

    const companyId = landPage?.CompanyID;

    if (!companyId) {
      console.warn('CompanyID not found for the provided LandPageRowId.');
      return null;
    }

    const company = await prismaGeneralDb.companies.findUnique({
      where: {
        CompanyID: companyId,
      },
    });

    return company;
  } catch (error) {
    console.error('Error fetching landing page or company:', error);
    return null;
  }
};