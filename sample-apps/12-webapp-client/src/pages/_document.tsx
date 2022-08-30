import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>o11y Shop</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.png"
        />
        <link
          href="http://fonts.cdnfonts.com/css/amazon-ember?styles=109935,109928,109934,109933,109930,109929,109932,109931,109925,109924,109927,109926"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}