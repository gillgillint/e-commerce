import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      default: '#0f0f0f',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: ['Urbanist', 'sans-serif'].join(','),
  },
});
