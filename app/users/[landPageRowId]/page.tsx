// /app/[landPageRowId]/page.tsx

import LandingPage from "@/app/landing/page";
import { fetchLandings, fetchProducts } from "@/app/utils/fetchLandPageCompany";



interface HomeProps {
  params: {
    landPageRowId: string;
  };
}

const Home = async ({ params }: HomeProps) => {
  const { landPageRowId } = await params;


  const products = await fetchProducts();
  const landingData = await fetchLandings(landPageRowId);

  if (!landingData) {
    return <h2 style={{ margin: 36, color: 'red' }}>לא נמצאה חברה</h2>;
  }
  const { companyData, landPageData } = landingData;

  if (!companyData || !landPageData) {
    return <h2 style={{ margin: 36, color: 'red' }}>לא נמצאה חברה</h2>;
  }


  return <LandingPage
    products={products}
    companyData={companyData}
    landPageRowId={landPageRowId}
    landPageData={landPageData}
  />;
};

export default Home;
