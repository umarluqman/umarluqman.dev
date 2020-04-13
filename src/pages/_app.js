import * as React from "react";
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider>
          <CSSReset />
          <ColorModeProvider>
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
