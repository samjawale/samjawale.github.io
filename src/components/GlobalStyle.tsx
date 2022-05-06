import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle<DefaultTheme>`
  html {
    height: 100%;
    animation: ease-in;
  }
  #root {
    height: 100%;
    position: relative;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    color: ${(theme) => theme.color.primary};
    font-family: ${(theme) => theme.fontFamily};
    background-color: ${(theme) => theme.color.background};
    border-color: ${(theme) => theme.color.border};
  }
`;

export default GlobalStyle;
