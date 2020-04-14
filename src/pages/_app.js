import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Page from "../components/Page";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <CSSReset />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}
