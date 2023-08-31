import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/raleway';
import '@fontsource/cedarville-cursive';

const primaryColorMain = '#3C70D8';
const primaryTextColor = '#1E1E1E';
const secondaryColorMain = '#F08BDF';
const accentColor = "#F2C91E";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColorMain,
    },
    secondary: {
      main: secondaryColorMain
    }
  },
  typography: {
    fontFamily: 'Raleway Variable',
    body1: {
      color: primaryTextColor
    },
    h1: {
      color: secondaryColorMain,
      fontWeight: 700,
      fontSize: '2rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Raleway Variable';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'p'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: primaryColorMain,
          fontWeight: 700,
          fontSize: '1rem',
          textTransform: 'none',
          border: `2px solid ${accentColor}`,
          borderRadius: '60px',
          padding: '1rem 2rem',
          '&:hover': {
            backgroundColor: accentColor,
            color: '#fff'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: `2px solid ${primaryColorMain} !important`,
              borderRadius: '100px !important',
            },
            '&:hover fieldset': {
              borderColor: `${accentColor} !important`,
            },
            '&.Mui-focused fieldset': {
              borderColor: `${primaryColorMain} !important`,
            }
          },
          '& .MuiOutlinedInput-input': {
            padding: '1rem !important',
            color: `${primaryTextColor} !important`,
            '&:hover': {
              color: `${accentColor} !important`,
            },
            '&:focus': {
              color: `${primaryColorMain} !important`,
            }
          },
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: primaryColorMain,
          marginBottom: '1rem',
          marginTop: '2.5rem',
          textAlign: 'left',
        },
      }
    }
  }
});