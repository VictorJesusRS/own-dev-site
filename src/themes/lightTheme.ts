"use client";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

 let lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    button: {
      textTransform: "none"
    },
    h1: {
      fontSize: '4rem',
      fontWeight: 'bold',
    }
  },
  
});

lightTheme = responsiveFontSizes(lightTheme)

export { lightTheme };