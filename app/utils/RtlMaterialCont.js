import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

//npm install stylis stylis-plugin-rtl
//npm i stylis-plugin-rtl@2.0.2;
//npm install jss-rtl


export default function RtlMaterialCont(props) {
    const { content } = props;

    const theme = createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
    });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                {content}
            </ThemeProvider>
        </CacheProvider>
    )

}
