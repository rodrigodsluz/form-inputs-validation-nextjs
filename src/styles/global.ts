import styled, { createGlobalStyle } from 'styled-components';

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

  /* #root {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: ${(props) => props.theme.colors.colorTextBase};
  }

  /* .container {
    width: 90vw;
    max-width: 700px;
  } */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

export const Container = styled.div`
    width: 90vw;
    max-width: 700px;
`;

interface Props {
  primary?: string;
  icon?: string;
}

export const Button = styled.button<Props>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
