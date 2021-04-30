import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html translate="no">
        <Head>
          <meta name="robots" content="noindex" />
          <script data-ad-client="ca-pub-2930474485888224" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <link rel="stylesheet" href="https://use.typekit.net/fdq4cxa.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument