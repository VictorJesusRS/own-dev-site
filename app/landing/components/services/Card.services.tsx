import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { serviceBenefit } from '../../types/services.types';

interface additionalProps {
  model: serviceBenefit,
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
          <CardMedia
            sx={{ width: { xs: '100%', md: '50%'} }}
            component="img"
            image={model.thumb}
            alt={model.thumbAlt}
          />
          <CardContent>
            <Typography 
            gutterBottom variant="h3" 
            color={'primary'}
            fontWeight={'bold'}
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