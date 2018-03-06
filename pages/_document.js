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
          <title>Vincent Bianciotto | UI/UX Designer</title>
          {this.props.styleTags}
          <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="stylesheet" href="/static/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Mada:300,400,500,600,700|Overpass+Mono:300,400,600,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
