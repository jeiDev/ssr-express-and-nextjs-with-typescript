import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="/libs/bootstrap/css/bootstrap.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/libs/bootstrap/js/jquery-3.3.1.slim.min.js"></script>
          <script src="/libs/bootstrap/js/popper.min.js"></script>
          <script src="/libs/bootstrap/js/bootstrap.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument