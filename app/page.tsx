"use client";

import Image from 'next/image'
import styles from './page.module.css'

import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export const metadata = {
  title: 'Victor Rivas | Desarrollador Full stack',
  description: `Desarrollador de software, 
  especializado en administración de empresas y Saas`,
}

export default function Home() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Box className={styles.main} component="main" sx={{ p: 3 }}>
        <Toolbar/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et delectus asperiores tempore dicta blanditiis error, consequatur ut, laboriosam inventore hic! Maxime ducimus ea et earum vero tempora magni aliquam?
      </Box>
    </div>
  )
}
