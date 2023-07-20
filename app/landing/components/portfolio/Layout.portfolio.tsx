import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import { TabsPortfolio } from './Tabs.portfolio'

const Layout: React.FC = () => {
  return (
    <Box id="portfolio" component={'section'}>
        <Box
            sx={{ py: '3rem'}}
        >
            <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}>
                Portafolio
            </Typography>
        </Box>
        <TabsPortfolio/>
    </Box>
  )
}

export { Layout }