"use client";

//own
import { Banner } from '@/app/landing/components/Banner'; 
import { LayoutService } from '@/app/landing/components/services/Layout.services';
// import { Layout as LayoutPortfolio } from '@/app/landing/components/portfolio/Layout.portfolio';
import { Footer } from '@/app/landing/components/footer/Footer';
import {MuiProvider } from '@/app/landing/components/providers/MuiProvider'



export function Content() {
  return (
    <MuiProvider>
      <Banner />
      <LayoutService/>
      <Footer/>
    </MuiProvider>
  )
}
