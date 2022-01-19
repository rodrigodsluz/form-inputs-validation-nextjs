import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyle';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default Application;
