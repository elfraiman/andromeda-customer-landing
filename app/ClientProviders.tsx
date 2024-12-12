"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import { ProductsProvider } from './context/ProductsContext';
import { LandPageProvider } from './context/LandPageContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});


export default function ClientProviders({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <LandPageProvider>
                        <ProductsProvider>
                            <CssBaseline />
                            {children}
                        </ProductsProvider>
                    </LandPageProvider>
                </ThemeProvider>
            </LocalizationProvider>
        </QueryClientProvider>
    );
}
