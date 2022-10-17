import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../styles/globals.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: "Hebden Grotesque, Andale Mono, Andale Mono Italic",
    fontSize: 16,
    h1: {
      fontFamily: "Hebden Grotesque",
      fontSize: '3.188rem',
      lineHeight: '66pt',
    },
    h2: {
      fontFamily: "Hebden Grotesque",
      fontSize: '2.625rem',
      lineHeight: '54pt',
    },
    h3: {
      fontFamily: "Hebden Grotesque",
      fontSize: '2.438rem',
      lineHeight: '47pt',
    },
    h4: {
      fontFamily: "Hebden Grotesque",
      fontSize: '1.75rem',
      lineHeight: '36pt',
    },
    h5: {
      fontFamily: "Hebden Grotesque",
      fontSize: '1.438rem',
      lineHeight: '28pt',
    },
    h6: {
      fontFamily: "Hebden Grotesque",
      fontSize: '1.375rem',
      lineHeight: '19pt',
    },
    subtitle1: {
      fontFamily: "Andale Mono",
      fontSize: "1.375rem",
      lineHeight: '26pt'
    },
    subtitle2: {
      fontFamily: "Andale Mono",
      fontSize: "1.25rem",
      lineHeight: '24pt'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
