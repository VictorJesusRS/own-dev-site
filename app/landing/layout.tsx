"use client";

import React from 'react';

import AppBar from "@/app/appBar/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Home: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </div>
  )
}

export default Home;