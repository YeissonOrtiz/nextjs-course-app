import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head/>
        <body style={{margin: 0 + 'px'}}>
          <Main />
          <NextScript />
          <style>
            {`
              * {
                font-family: ‘Nunito’, sans-serif;
              }
            `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument