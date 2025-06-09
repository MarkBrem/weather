import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000000;
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Montserrat', monospace;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    font-family: 'Montserrat', sans-serif;
  }

  button,
  footer {
    background-color: #FFB36C;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000000;
    border: none;
    cursor: pointer;
  }
`;