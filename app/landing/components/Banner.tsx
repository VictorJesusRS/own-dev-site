import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';


import { Social } from '@/app/landing/components/Social'; 

const Banner: React.FC = () => {
  return (
    <Box sx={{ height: '100%'}}>
      <Grid 
        container spacing={2} 
        sx={{ width: '100%', height: '95%'}}  
        columns={{ xs: 12, md: 12}}
        
      >
        <Grid 
          md={8}
          xs={12} 
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box padding={{ md: 6 }}>
            <Typography variant='h1' component={'h1'}  gutterBottom>
              Desarrollo web enfocado a negocios
            </Typography>
            <Typography 
            variant='h5' 
            color={'GrayText'}
            
            >
              Alcanza nuevos niveles Alcanza nuevos niveles 
              Alcanza nuevos niveles Alcanza nuevos niveles         
            </Typography>  
          </Box>
        </Grid>
        <Grid 
          md={4} 
          xs={12} 
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
        >
          <Box paddingTop={{ md: 0, display: 'flex', position:"relative" }}>
            
            <Image
              src={'/imgs/2.svg'}
              height={400}
              width={400}
              // fill={true}
              alt='Web Atomatización Isométrica Ilustrasión'
            />
          </Box>
        </Grid>
      </Grid>
      <Social/>
    </Box>
  )
}

export { Banner };