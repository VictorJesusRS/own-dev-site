'use client';
import { Lato } from 'next/font/google'

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
          <body className={lato.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
