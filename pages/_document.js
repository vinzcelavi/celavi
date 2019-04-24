import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
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
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXKXXF8');`,
          }}>
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
