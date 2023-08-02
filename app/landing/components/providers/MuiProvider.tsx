'use client';
import { Lato } from 'next/font/google'
import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Analytics } from '@vercel/analytics/react';

import { lightTheme } from "@/src/themes/lightTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import '@/app/globals.css'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export function MuiProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
        <body className={lato.className} style={{ height: '100vh' }}>
        <div style={{ height: '100%' }}>
            <header>
                <AppBar />
            </header>
            <Box component="main" sx={{ p: 3, minHeight: '95%' }}>
            <Toolbar/>
            {children}
            </Box>
        </div>  
        <Analytics />
        </body>
    </ThemeProvider>
  )
}
