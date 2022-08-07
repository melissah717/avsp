
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#717070',
    },
    secondary: {
      main: '#59a3ff',
    },
    background: {
      default: '#2f2e2e',
      paper: '#fffcfc',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(76,41,41,0.54)',
    },
  },
  typography: {
    overline: {
      lineHeight: 1.73,
      letterSpacing: '-0.05em',
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h1: {
      fontSize: '6rem',
    },
  },
});