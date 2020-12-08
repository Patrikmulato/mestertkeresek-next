import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f89ba0',
      main: '#FF4F57',
      dark: '#c80322',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#ba0013',
    },
    text: {
      primary: '#444444',
    },
    background: {
      default: '#FFFFFF',
      paper: '#212121',
    },
    action: {
      hover: '#FFFFFF',
    },
  },
});

export default theme;
