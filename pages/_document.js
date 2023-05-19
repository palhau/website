import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alan Palhau Website" />
        <meta name="author" content="Alan Palhau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
