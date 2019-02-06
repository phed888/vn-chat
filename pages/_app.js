import App, { Container } from "next/app";
import GlobalHeader from "../components/VNextChrome/GlobalHeader";
import Tabs from "../components/VNextChrome/Tabs";
import styled, {
  ServerStyleSheet,
  createGlobalStyle,
  ThemeProvider
} from "styled-components";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <GlobalHeader />
        <Tabs />
        <Component />
      </Container>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0 28px 28px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 29, 0.7) 16%,
        rgba(0, 0, 29, 0) 75%,
        rgba(0, 0, 29, 0)
      ),
      url('/static/images/252339-New-York.jpg');
    background-size: cover;
    background-position: center top;
    background-color: #203157;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  #__next {
    display: grid;
    grid-template-rows: 60px 52px auto;
    align-content: stretch;
    height: 100%
  }
`;

export default MyApp;
