import { createTheme } from '@mui/material/styles';
import '@fontsource/press-start-2p';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#454545',
      dark: '#000000',
    },
    secondary: {
      main: '#d2583e',
    },
    transparentLight: {
      main: 'rgba(255, 240, 235, 0.16)',
    },
  },
  typography: {
    fontFamily: [
      '"Press Start 2P"',
      'cursive',
    ].join(','),
  },
});

export const lightTheme = createTheme(theme, {
  mode: 'dark',
  mixins: {
    toolbar: {
      minHeight: 0,
      height: 64,
      [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 0,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: 0,
      },
    },
    footer: {
      height: 64,
    },
  },
  shadows: [
    ...theme.shadows,
    '0 0 2em 0px rgba(0, 0, 0, 0.4)',
    '0 0 0 1px #ddd',
  ],
  transitions: {
    easeMe: 'all 0.2s ease-out',
  },
});

export default lightTheme;
