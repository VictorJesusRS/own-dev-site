
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Image from 'next/image'

import { Project } from '../../types/portfolio.types'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    projects: Array<Project>;
}
  
const CardPortfolio = ( props: TabPanelProps ) => {
    const { projects, value, index, ...other } = props;
    
    return (
        <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-around' }}
        >
        {value === index && (

            projects.map( ( project, index ) => {
                return (
                    <Paper
                        key={`${project.title}-${index}`}
                    >
                        <Box
                            sx={{ position: 'relative' }}
                        >   
                            <Box
                                sx={{ 
                                    width: { xs: 350, md: 500 },  
                                    height: { xs: 250, md: 500 }
                                }}
                            >
                                <Image
                                    // height={{ xs: 250, md: 500 }}
                                    // width={250}
                                    fill
                                    src={project.thumb}
                                    alt={project.thumbAlt ?? ''}
                                />
                            </Box>
                        </Box>
                    </Paper>
                )
            })
        )}
        </Box>
    );
}

export { CardPortfolio } 