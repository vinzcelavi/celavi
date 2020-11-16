import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import useDarkMode from '../theme/useDarkMode';
import GlobalStyles from '../theme/global';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Head>
        <title>Vincent Bianciotto | Front-End Designer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/static/favicon.png" type="image/png" />
        <link
          rel="icon"
          sizes="32x32"
          href="/static/favicon-32.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="64x64"
          href="/static/favicon-64.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="96x96"
          href="/static/favicon-96.png"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Mada:300,400,500,600,700|Overpass+Mono:300,400,600,700"
          rel="stylesheet"
        />
      </Head>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {children}
    </ThemeProvider>
  );
};

export default Layout;
