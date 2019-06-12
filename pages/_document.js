import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Vincent Bianciotto | Front-End Designer</title>
          {this.props.styleTags}
          <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.png" type="image/png" />
          <link rel="icon" sizes="32x32" href="/static/favicon-32.png" type="image/png" />
          <link rel="icon" sizes="64x64" href="/static/favicon-64.png" type="image/png" />
          <link rel="icon" sizes="96x96" href="/static/favicon-96.png" type="image/png" />
          <link rel="stylesheet" href="/static/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Mada:300,400,500,600,700|Overpass+Mono:300,400,600,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script dangerouslySetInnerHTML={{
            __html: `var el = document.createElement('script');
              el.setAttribute('src', 'https://static.axept.io/sdk.js');
              el.setAttribute('type', 'text/javascript');
              el.setAttribute('async', true);
              el.setAttribute('data-id', '5cbf13f207dbd70cd32ec23d');
              if (document.body !== null) {
                document.body.appendChild(el);
              }`
          }}>
          </script> */}
        </body>
      </html>
    )
  }
}
