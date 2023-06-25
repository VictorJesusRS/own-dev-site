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
const logoSrc = "/brand/isologo5.svg";
const navItems = [
  {
    name: 'Inicio',
    path: '/',
  }, 
  {
    name: 'Servicios',
    path: '/aaa',
  }, 
  {
    name: 'Portafolio',
    path: '',
  }, 
  {
    name: 'Acerca de',
    path: '',
  }, 
  {
    name: 'Contacto',
    path: '',
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
        <Image
            src={logoSrc}
            width={logoWidthHeight}
            height={logoWidthHeight}
            alt="isologo: victor rivas"
          />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton className='tw-flex tw-justify-center'>
              <Link href={item.path} underline="none" color={'inherit'}>
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
              gap: 10, px: { md: 4}, py:1, display: 'flex', 
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
              <Image
                src={logoSrc}
                height={logoWidthHeight}
                width={logoWidthHeight}
                alt="logo: victor rivas"
              />
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