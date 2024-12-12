"use client";
import logo from '@/img/svg/logoAndromedaColor.svg';
import { Box, Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Import Grid2
import Image from 'next/image';
import { Companies, LandPages, Products } from '../../prisma/generated/base/index';
import CaptureForm from "../components/CaptureForm";
import RtlMaterialCont from '../utils/RtlMaterialCont';
import styles from "./landingPage.module.scss";
import { useLandingPageData, useLandPage } from '../context/LandPageContext';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useCompany } from '../context/CompanyContext';

interface LandingPageProps {
    landPageRowId: string;
    companyData: Companies;
    products: Products[];
    landPageData: LandPages;
}

function LandingPage(props: LandingPageProps) {
    const { setLandPageRowId } = useLandPage();
    const { setLandingPageData } = useLandingPageData();
    const { setCompanyData } = useCompany();
    const { setProducts } = useProducts();

    // Set all the data for the context
    // to be used across the app in the global state
    //
    useEffect(() => {
        // Set the context state for company, landPageRowId and products
        // 
        setCompanyData(props.companyData);
        setLandPageRowId(props.landPageRowId);
        setProducts(props.products);
        setLandingPageData(props.landPageData);
    }, [props.landPageRowId, setLandPageRowId, props.products, setProducts, props.companyData, setCompanyData, props.landPageData, setLandingPageData]);

    return (
        <Grid2 container className={styles.formLogin} >
            <Grid2
                xs={12}
                sm={8}
                md={6}
                className={styles.grid}
                alignContent="center"
                component={Paper}
                elevation={6}
                square>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Image className={styles.logoLogin} src={logo} alt="logo" />
                    <RtlMaterialCont content={<CaptureForm companyData={props.companyData} />} />
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default LandingPage;
