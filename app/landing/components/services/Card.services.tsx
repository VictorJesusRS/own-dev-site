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

const CardService: React.FC<additionalProps> = ( { model, rightImg }) => {
  return (

      <Box
        sx={{ 
          display: { xs: 'block', md: 'flex'}, 
          justifyContent:'center', 
          flexDirection: (rightImg) ? 'row-reverse' : 'row',
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
            }}
          >
            <Image
                src={model.thumb}
                height={400}
                width={400}
                // fill={true}
                alt={model.thumbAlt ?? ''}
                style={{ width: 'auto', height: 'auto' }}
              />
          </Box>

          <CardContent
             sx={{ 
              width: { xs: '100%', md: '50%'}, 
            }}
          >
            <Typography 
            gutterBottom variant="h3" 
            color={'primary'}
            fontWeight={'bold'}
            sx={{ mb: '2rem'}}
            >
              {model.title}
            </Typography>
            <Typography variant="h5" color={'black'} component={'p'}>
              {model.subtitle}
            </Typography>
          </CardContent>

      </Box>
  )
}


export  { CardService }