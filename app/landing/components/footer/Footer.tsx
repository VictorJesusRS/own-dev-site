import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { contactWays  } from '@/app/constants/contact.enums'
import { Social } from '../Social';
import { Divider } from '@mui/material';

const Footer: React.FC = () => {

    
    return (
        <Box>
            <Box
                sx={{ pt: '2rem'}}
                id="contact"
            >
                <Social/>
            </Box>
            {/* <Box
                sx={{ my: '1rem' }}
            >
                <Typography variant='body1' textAlign={'center'}>
                    Diseñado por - 
                    <Link 
                        className={'tw-ease-in tw-transition  tw-duration-300 hover:tw-opacity-75'}
                        href={`mailto:${contactWays.EMAIL}`}
                        underline='none' 
                    >
                        {' Victor Rivas'}
                    </Link> 
                </Typography>
            </Box> */}
        </Box>
    )
}


export { Footer }