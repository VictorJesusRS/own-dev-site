'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Image from 'next/image'

const drawerWidth = 240;
const logoWidthHeight = 225;
const logoSrc = "/brand/isologo4.svg";
const navItems = [
  {
    name: 'Inicio',
    path: '/',
  }, 
  {
    name: 'Servicios',
    path: '/#services',
  }, 
  // {
  //   name: 'Portafolio',
  //   path: '/#portfolio',
  // }, 
  // {
  //   name: 'Acerca de',
  //   path: '/#about',
  // }, 
  {
    name: 'Contacto',
    path: '/#contact',
  }, 
];

// export default function DrawerAppBar<FunctionComponent>() {

const DrawerAppBar: React.FC<React.PropsWithChildren> = ({children}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box className={'tw-flex tw-justify-center tw-my-2'}>
      <Link 
          href={`/`} 
          underline='none' 
      >

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
          <span style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '3rem', fontWeight: 'bolder'}}>{ '{' }</span>
          <span  style={{ color: '#2196f3', fontSize: '1.25rem', fontWeight: 'bolder', marginTop: '6px'}}>{ 'VICTOR' }</span>
          <span  style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '1.25rem', fontWeight: 'bolder', marginTop: '6px', marginLeft: '6px'}}>{ 'RIVAS' }</span>
          <span  style={{ color: '#2196f3', fontSize: '3rem', fontWeight: 'bolder'}}>{ '}' }</span>
        </div>
        {/* <Image
            src={logoSrc}
            width={logoWidthHeight}
            height={logoWidthHeight}
            alt="isologo: victor rivas"
            // style={{ width: 'auto', height: 'auto' }}
            style={{ width: 'auto', height: `4rem` }}
            priority
          /> */}
      </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton className='tw-flex tw-justify-center'>
              <Link href={item.path} underline="none" color={'inherit'} aria-label='link to home page'>
                <Typography >
                  {item.name}
                </Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <CssBaseline />
      <AppBar component="nav" color='inherit'>
        <Toolbar 
        > 
          <Box
            sx={{ 
              gap: { md: 10 }, px: { md: 4}, py:1, display: 'flex', 
              justifyContent: 'space-between', alignItems:'center',
              width: '100%',
            }}
            
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
            <Link 
                href={`/`} 
                underline='none' 
                aria-label='link to home page'
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '4rem', fontWeight: 'bolder'}}>{ '{' }</span>
                <span  style={{ color: '#2196f3', fontSize: '2rem', fontWeight: 'bolder', marginTop: '6px'}}>{ 'VICTOR' }</span>
                <span  style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '2rem', fontWeight: 'bolder', marginTop: '6px', marginLeft: '6px'}}>{ 'RIVAS' }</span>
                <span  style={{ color: '#2196f3', fontSize: '4rem', fontWeight: 'bolder'}}>{ '}' }</span>
              </div>
              {/* <Image
                src={logoSrc}
                height={logoWidthHeight}
                width={logoWidthHeight}
                alt="logo: victor rivas"
                style={{ width: 'auto', height: '4rem' }}
                priority
              /> */}
            </Link> 
       
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button 
                key={item.name} 
                variant="outlined" 
                sx={{ 
                  borderRadius: 10000, 
                  marginRight: 1,
                  width: 110,
                }}
                color={'inherit'}
                >
                  <Link href={item.path} underline="none" color={'inherit'}>
                    <Typography>
                      {item.name}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;