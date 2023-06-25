"use client";

import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider } from '@mui/material';


//own
import styles from './page.module.css'
import { Banner } from '@/app/landing/components/Banner'; 
import { Social } from '@/app/landing/components/Social'; 
import { LayoutService } from '@/app/landing/components/services/Layout.services';

export const metadata = {
  title: 'Victor Rivas | Desarrollador Full stack',
  description: `Desarrollador de software, 
  especializado en administración de empresas y Saas`,
}

export default function Landing() {
  return (
    <>
      <Banner />
      <Divider/>
      <LayoutService/>
      <Divider/>
      
    </>
  )
}
