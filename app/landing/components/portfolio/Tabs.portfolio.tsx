import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { CardPortfolio } from './Card.portfolio';
import { portfolioData } from '../../data/portfolio.data';

const TabsPortfolio = () => {

  const [value, setValue] = React.useState(0);
  const [ projects, setProjects ] = React.useState(portfolioData);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          hidden
        >
          <Tab label="Principales" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CardPortfolio 
        value={value} 
        index={0}
        projects={projects}
      />
    </Box>
  );

}

export { TabsPortfolio }