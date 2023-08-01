import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

import { ServiceBenefit } from '../../types/services.types';

interface additionalProps {
  model: ServiceBenefit,
  rightImg: boolean,
};

const CardService: React.FC<additionalProps> = ( { model, rightImg, }) => {
  return (

      <Box
        sx={{ 
          display: { xs: 'block', md: 'flex'}, 
          justifyContent:'center', 
          flexDirection: (rightImg) ? 'row-reverse' : 'row',
          borderRadius: '2rem 2rem 2rem 2rem',
          border: '1px solid rgba(0,0,0,0.1)',
          marginBottom: '1rem'
        }}
      >
          {/* <CardMedia
            sx={{ width: { xs: '100%', md: '50%'} }}
            component="img"
            image={model.thumb}
            alt={model.thumbAlt}
          /> */}
          <Box
            sx={{ 
              width: { xs: '100%', md: '50%'}, 
              position: 'relative',
              minHeight: '20rem',
              height: 'auto',
              backgroundColor: '#000000de',
              padding: '2rem',
              borderRadius: { 
                md: (rightImg) ? '0rem 2rem 2rem 0rem' : '2rem 0rem 0rem 2rem',
                xs: '2rem 2rem 0rem 0rem',
              } ,
            }}
          >
            <Image
                src={model.thumb}
                height={400}
                width={400}
                // fill={true}
                alt={model.thumbAlt ?? ''}
                style={{ margin: 'auto', width: 'auto', height: '25rem' }}
                
              />
          </Box>

          <CardContent
             sx={{ 
              width: { xs: '100%', md: '50%'}, 
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: { 
                md: (rightImg) ?  '2rem 0rem 0rem 2rem' : '0rem 2rem 2rem 0rem',
                xs: '2rem',
              }
            }}
          >
            <Typography 
            gutterBottom variant="h3" 
            color={'primary'}
            fontWeight={'bold'}
            sx={{ mb: '2rem', textAlign: {xs: 'center', md: 'left'}}}
            >
              {model.title}
            </Typography>
            <Typography variant="h5" component={'p'}>
              {model.subtitle}
            </Typography>
          </CardContent>

      </Box>
  )
}


export  { CardService }