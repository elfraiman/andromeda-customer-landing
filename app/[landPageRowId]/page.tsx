// /app/[landPageRowId]/page.tsx

import LandingPage from '../landing/page';
import { fetchLandings, fetchProducts } from '../utils/fetchLandPageCompany';

interface HomeProps {
  params: {
    landPageRowId: string;
  };
}

const Home = async ({ params }: HomeProps) => {
  const { landPageRowId } = await params;

  const products = await fetchProducts();
  const findCompanyData = await fetchLandings(landPageRowId);

  if (!findCompanyData) {
    return <h2 style={{ margin: 36, color: 'red' }}>לא נמצאה חברה</h2>;
  }

  return <LandingPage
    products={products}
    companyData={findCompanyData}
    landPageRowId={landPageRowId} />;
};

export default Home;
