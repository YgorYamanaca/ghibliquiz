import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Times New Roman", Times, serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={db.theme}>
      <Head>
        <meta name="og:title" content={db.title}/>
        <meta name="og:description" content={db.description}/>
        <meta property="og:image" content={db.bg}/>
      </Head>
      
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
