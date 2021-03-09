import React from 'react';
import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rajdhani:300,regular,500,600,700"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>

        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
