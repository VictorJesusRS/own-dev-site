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

    let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.1,
      };
      
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting
            if (intersecting && entry.target.classList.contains('animate')) {

                if (entry.target.classList.contains('a-in-right')) {
                    entry.target.classList.add('in-right') 
                } else if (entry.target.classList.contains('a-in-left')) {
                    entry.target.classList.add('in-left') 
                }
                entry.target.classList.remove('animate') 
            }
          })
    }, options);

    React.useEffect(() => {
        serviceBenefits.map((item, index) => {
            let target = document.querySelector(`#service-${index}`);
            if (target) {
                observer.observe(target);
            }
        })
    }, [])


      
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

                    const rightImg = !!!(index % 2);

                    return (        
                        <Grid
                            key={item.title}
                            md={12}
                            xs={12} 
                            sx={{ py: { xs: 'none', md: 'none'}}}
                        >
                            <Box
                                sx={{ marginBottom: '2rem' }}
                                className={ rightImg ? 'a-in-right animate' : 'a-in-left animate' }
                                id={ `service-${index}`}
                            >
                                <CardService 
                                    model={item}
                                    rightImg={ rightImg }
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