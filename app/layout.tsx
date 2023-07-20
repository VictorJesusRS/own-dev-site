'use client';
import { Lato } from 'next/font/google'
import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { lightTheme } from "@/src/themes/lightTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import './globals.css'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
          <body className={lato.className} style={{ height: '100vh' }}>
            <div style={{ height: '100%' }}>
              <header>
                <AppBar />
              </header>
              <Box component="main" sx={{ p: 3, height: '95%' }}>
                <Toolbar/>
                {children}
              </Box>
            </div>  
          </body>
      </ThemeProvider>
    </html>
  )
}
