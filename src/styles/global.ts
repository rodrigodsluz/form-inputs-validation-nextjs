import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 1.6rem Archivo, sans-serif;
  }

  :root {
    font-size: 60% ;
  }

  html, body, #root {
    height: 100vh;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: ${(props) => props.theme.colors.colorTextBase};
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
