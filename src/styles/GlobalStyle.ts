import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.white};
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.medium};
    }

    ol,
    li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}
`;

export default GlobalStyle;
