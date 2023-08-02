'use client';
import { Lato } from 'next/font/google'
import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Analytics } from '@vercel/analytics/react';

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
        <meta charSet="UTF-8"/>
{/* 
        <title>Victor Rivas | Desarrollador Full Stack</title>
        <meta name="description" content="Automatiza, agiliza y posicionate en la web con mis servicios de consultoría y desarrollos a medida con
        PHP, Laravel, React.js, Javascript, HTML, CSS.
        "/>

        <meta property="og:title" content="Victor Rivas | Desarrollador Full Stack"/> 
        <meta property="og:description" content="Automatiza, agiliza y posicionate en la web con mis servicios de consultoría y desarrollos a medida"/>
        <meta property="og:type" content="website"/>  */}
        <meta property="og:image" content={'https://victorjesusrs.vercel.app/imgs/page-preview.png'}/> 
      </head>

        {children}

    </html>
  )
}
