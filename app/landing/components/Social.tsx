import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

//own
import { socialUrls, socialColors } from '@/app/constants/social.enums'
import { contactWays  } from '@/app/constants/contact.enums'

const Social: React.FC = () => {
    return (
        <Box>
            <Grid
                container
                columns={{ xs: 12, md: 12}}
            >
                <Grid 
                    md={6}
                    xs={12} 
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: { xs: 'center', md: 'left'} }}
                >
                    <Box
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem'
                        }}
                    >
                        <Typography variant='h6'>
                            Sigueme en  -                        
                        </Typography>
                        <Link href={socialUrls.LINKEDIN} color={socialColors.LINKEDIN}>
                            <LinkedInIcon 
                                className={'tw-ease-in tw-transition tw-duration-300 hover:tw-scale-125 hover:tw-opacity-75'} 
                                fontSize='large'
                            />
                        </Link>
                        <Link href={socialUrls.INSTAGRAM} color={socialColors.INSTAGRAM}>
                            <InstagramIcon 
                                className={'tw-ease-in tw-transition  tw-duration-300 hover:tw-scale-125 hover:tw-opacity-75'} 
                                fontSize='large'
                            />
                        </Link>
                        <Link href={socialUrls.TWITTER} color={socialColors.TWITTER}>
                            <TwitterIcon 
                                className={'tw-ease-in tw-transition  tw-duration-300 hover:tw-scale-125 hover:tw-opacity-75'} 
                                fontSize='large'
                            />
                        </Link>
                    </Box>
                </Grid>
                <Grid 
                    md={6}
                    xs={12} 
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: { xs: 'center', md: 'right'} 
                    }}
                >
                    <Box>
                        <Typography variant='h6'>
                            Contacto -
                            <Link 
                                className={'tw-ease-in tw-transition  tw-duration-300 hover:tw-opacity-75'} 
                                href={`mailto:${contactWays.EMAIL}`} 
                                underline='none' 
                            >
                                { ' ' + contactWays.EMAIL }
                            </Link> 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}




export { Social }
