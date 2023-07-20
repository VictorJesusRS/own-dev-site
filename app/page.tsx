"use client";

import { Divider } from '@mui/material';
import { Metadata } from 'next'
//own
import { Banner } from '@/app/landing/components/Banner'; 
import { LayoutService } from '@/app/landing/components/services/Layout.services';
// import { Layout as LayoutPortfolio } from '@/app/landing/components/portfolio/Layout.portfolio';
import { Footer } from '@/app/landing/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Victor Rivas | Desarrollador Full stack',
  description: `Desarrollador de software, 
  especializado en administración de empresas y Saas`,
}

export default function Home() {
  return (
    <>
      {/* <LayoutPortfolio/> */}
      <Banner />
      <LayoutService/>
      <Footer/>
    </>
  )
}
