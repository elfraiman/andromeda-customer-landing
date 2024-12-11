"use client";

import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </LocalizationProvider>
    );
}
