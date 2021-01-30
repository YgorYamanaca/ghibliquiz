import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito', sans-serif;
    font-size:15px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
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
  .songPlayerId
  {
    position:absolute;
    z-index:2;
    bottom:0;
    right:0;
    margin:1%;
    & > audio{
      border:0;
      outline:0;
    }

    @media (max-width:500px){
      display:flex;
      position:static;
      margin:0;
      justify-content:center;
      background-color: ${({ theme }) => theme.colors.mainBg};
      & > audio{
      border:0;
      outline:0;
      margin:2%;
    }
    }
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////APX19QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIAAAAAIiIiAAAAAAAAIiAAAAAAAAACAAEQARABEAAAEQEAABARAAARAQAAEBEAAAEQAAABEAAAAAAAAAAAACAAAAAAAAACIAAAAiAAAAIiAAACIAAAIiIAACIiAAAiIgAAIiIAACIiIAIiIiACIiIgAiIiIAIiAiAiIiIiAiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAA" rel="icon" type="image/x-icon" />
        <meta name="og:title" content={db.title} />
        <meta name="og:description" content={db.description} />
        <meta property="og:image" content="https://paogeekeijo.com/wp-content/uploads/2020/03/20140816.ghibliA.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
