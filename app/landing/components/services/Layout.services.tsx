import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { CardService } from './Card.services';
import { serviceBenefitData } from '@/app/landing/data/services.data';

const LayoutService: React.FC = () => {
    const [ serviceBenefits, setServiceBenefits] = React.useState(serviceBenefitData);
    const products: Array<string> = [];
    return (
    <Box id="services" component={'section'} sx={{ paddingBottom: '2rem'}}>
        <Box
            sx={{ py: '3rem'}}
        >
            <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}>
                Servicios
            </Typography>
        </Box>
        <Grid
            container
            columns={{ xs: 12, md: 12}}
        >
            {
                serviceBenefits.map((item, index) =>  {
                    return (        
                        <Grid
                            key={item.title}
                            md={12}
                            xs={12} 
                            sx={{ py: { xs: 'none', md: 'none'}}}
                        >
                            <Box
                                sx={{ marginBottom: '2rem' }}
                            >
                                <CardService 
                                    model={item}
                                    rightImg={ !!!(index % 2) }
                                />
                            </Box>
                           

                            {
                                // index !== (serviceBenefits.length - 1) && (
                                //     <Divider variant="middle"/>
                                // )
                            }
                        </Grid>    
                    );
                })
            }



        </Grid>
    </Box>
  )
}

export  { LayoutService }