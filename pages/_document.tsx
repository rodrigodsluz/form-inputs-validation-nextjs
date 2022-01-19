import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const language = 'pt-br';

type Props = {
  styleTags: string;
};

/**
 * @export
 * @component
 * @name ApplicationDocument
 *
 * @description
 * Responsible for all settings of project.
 * Allows us to override the default page layout and inject our own styles and markup.
 * Only rendered on the server side.
 */
export default class ApplicationDocument extends Document<Props> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={language}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicons/favicon-d1.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
