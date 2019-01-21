import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="UTF-8" />
          <title>Questions</title>
        </Head>
        <style>
          {`* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: arial;
            text-decoration: none;
          }

          h1,
          h2,
          h3 {
            font-family: helvetica;
          }
        `}
        </style>
        <body>
          <Main defer />
          <NextScript defer />
        </body>
      </html>
    )
  }
}
