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
      light: accentColor
    },
    secondary: {
      main: secondaryColorMain
    },
    text: {
      primary: primaryTextColor
    }
  },
  typography: {
    fontFamily: 'Raleway Variable',
     body1: {
      color: primaryTextColor
    },
    body2: {
      color: secondaryColorMain,
      fontSize: '2rem',
      fontFamily: 'Cedarville Cursive'
    },
    h1: {
      color: primaryColorMain,
      fontWeight: 900,
      fontSize: '4.5rem'
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
      defaultProps: {
        color: 'primary',
        inputProps: {
          style: {
            color: "#3C70D8",
          }
      },
    },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: `2px solid ${primaryColorMain}`,
              borderRadius: '100px ',
            },
            '&:hover fieldset': {
              borderColor: `${accentColor}`,
            },
            '&.Mui-focused fieldset': {
              borderColor: `${primaryColorMain}`,
            }
          },
          '& .MuiOutlinedInput-input': {
            padding: '1rem',
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