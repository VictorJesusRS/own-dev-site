import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';




const Banner: React.FC = () => {
  return (
    // <Box sx={{ display: 'flex'}}>
      <Grid container spacing={2} sx={{ width: '100%'}}  columns={{ xs: 12, md: 12}}>
        <Grid md={8} xs={12} sx={{ flexGrow: 1 }}>
          <Box padding={{ md: 6}}>
            <Typography variant='h1' component={'h1'} gutterBottom>
              Desarrollo Web Enfocado A Negocios
            </Typography>
            <Typography variant='h5' >
              Alcanza nuevos niveles Alcanza nuevos niveles 
              Alcanza nuevos niveles Alcanza nuevos niveles         
            </Typography>  
          </Box>
        </Grid>
        <Grid md={4} xs={12} sx={{ flexGrow: 1 }}>
          <Box paddingTop={{ xs: 3, md: 0}}>
            <Image
              src={'/brand/isologo5.svg'}
              height={400}
              width={400}
              alt='Logo: Victor Rivas'
            />
          </Box>
        </Grid>
      </Grid>
    // </Box>
  )
}

export { Banner };