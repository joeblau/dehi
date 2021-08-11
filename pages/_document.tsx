import Document, { Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
