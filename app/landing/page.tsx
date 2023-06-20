"use client";

import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import styles from './page.module.css'
import { Banner } from '@/app/landing/banner/Banner'; 

export const metadata = {
  title: 'Victor Rivas | Desarrollador Full stack',
  description: `Desarrollador de software, 
  especializado en administración de empresas y Saas`,
}

export default function Landing() {
  return (
    <Banner />
  )
}
