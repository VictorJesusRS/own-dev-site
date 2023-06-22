"use client";

import React from 'react';

import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


const Home: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div style={{ height: '100%' }}>
      <header>
        <AppBar />
      </header>
      <Box component="main" sx={{ p: 3, height: '95%' }}>
        <Toolbar/>
        {children}
      </Box>
    </div>
  )
}

export default Home;