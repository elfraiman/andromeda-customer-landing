"use client"
import logo from '@/img/svg/logoAndromedaColor.svg';
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import Image from 'next/image';
import CaptureForm from "../components/CaptureForm";
import RtlMaterialCont from '../utils/RtlMaterialCont';
import styles from "./landingPage.module.scss";



export default function Landing() {
    return (
        <Grid container className={styles.formLogin} component="main" sx={{ height: '100vh' }}>
            <CssBaseline />

            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url("img/sitePic.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }}
            />

            <Grid item xs={12} sm={8} md={6} className={styles.grid} alignContent='center' component={Paper} elevation={6} square>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Image className={styles.logoLogin} src={logo} alt='logo' />
                    {<RtlMaterialCont content={<CaptureForm />} />}
                </Box>
            </Grid>
        </Grid>
    );
}
