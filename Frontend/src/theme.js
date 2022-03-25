import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary:{
      main:'#008080'
    },
    background: {
      default: '#fff',
      grey:'#fcf5f5'
    },
    
  },
  typography: {
    fontFamily: ['Urbanist', 'sans-serif'].join(','),
  },
});
