"use client"
import { useCompany } from "@/app/context/CompanyContext";
import { useLandPage } from "@/app/context/LandPageContext";
import logo from '@/img/svg/logoAndromedaColor.svg';
import { Box, Button, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import styles from '../list/listPage.module.scss';


const ListPage = () => {
    const { companyData } = useCompany();
    const { landPageRowId } = useLandPage();


    const router = useRouter()
    console.log(companyData);

    const onClick = () => {
        router.push(`/users/${landPageRowId}`)
    }

    return (
        <Grid2 container className={styles.listPage} >
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
                    <h2>{companyData?.CompanyName}</h2>

                    <Button className={styles.Btn} onClick={() => onClick()}>
                        הוסף לקוח נוסף
                    </Button>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default ListPage;