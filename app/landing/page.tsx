"use client";
import logo from '@/img/svg/logoAndromedaColor.svg';
import { Box, Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Import Grid2
import Image from 'next/image';
import { Companies, Products } from '../../prisma/generated/base/index';
import CaptureForm from "../components/CaptureForm";
import RtlMaterialCont from '../utils/RtlMaterialCont';
import styles from "./landingPage.module.scss";
import { useLandPage } from '../context/LandPageContext';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductsContext';

interface LandingPageProps {
    landPageRowId: string;
    companyData: Companies;
    products: Products[];
}

function LandingPage(props: LandingPageProps) {
    const { setLandPageRowId } = useLandPage();
    const { setProducts } = useProducts();

    useEffect(() => {
        // Set the landPageRowId from params when the page loads
        // to the context global state so we can re-use this in other components if needed.
        // 
        setLandPageRowId(props.landPageRowId);
        setProducts(props.products);
    }, [props.landPageRowId, setLandPageRowId, props.products, setProducts]);

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
