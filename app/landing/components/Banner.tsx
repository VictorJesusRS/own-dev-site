import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import BannerImg from '@/app/landing/assets/imgs/banner.svg'
import { Social } from '@/app/landing/components/Social'; 

const Banner: React.FC = () => {
  return (
    <Box sx={{ height: '100%', }}>
      <Grid 
        container spacing={2} 
        sx={{ 
          width: '100%', 
          height: '90%',
          marginBottom: '2rem', 
          marginTop: '3rem', 
          marginX: 'auto',
          backgroundImage: { 
            xs: 'linear-gradient( to bottom, #2196f3, 50%, white)',
            md: 'linear-gradient(.25turn, #2196f3, 50%, white)',
          },
          borderRadius: '2rem'
      
        }}  
        columns={{ xs: 12, md: 12}}
      >
        <Grid 
          md={6}
          xs={12} 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '2rem',
            paddingX: { xs: '2rem', md: '4rem'},
            paddingY: { xs: '2rem', md:'none'}
          }}
        >
          <Box padding={{ md: 6 }}>
            <Box>
              <Typography variant='h1' component={'h1'} sx={{textAlign: {xs: 'center', md: 'left'}}}  gutterBottom>
                Desbloquea tu potencial en línea
              </Typography>
            </Box>
            <Box>
              <Typography 
              variant='h5' 
              color={'white'}
              fontWeight={'bold'}
              sx={{textAlign: {xs: 'center', md: 'left'}}}
              >
                ¡Automatiza, agiliza y posicionate en la web!   
              </Typography>  
            </Box>
          </Box>
        </Grid>
        <Grid 
          md={6} 
          xs={12} 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: {xs: 'center', md: 'flex-start'},
           
          }}
        >
          <Box paddingTop={{ md: 0, display: 'flex', position:"relative",  width: '90%', height: '90%' }}>
            
            <Image
              src={BannerImg}
              height={400}
              width={400}
              // fill={true}
              alt='Web Atomatización Isométrica Ilustrasión'
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </Box>
        </Grid>
      </Grid>
  
      <Social/>
    </Box>
  )
}

export { Banner };