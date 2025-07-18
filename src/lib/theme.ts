import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f5f7',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
  },
});