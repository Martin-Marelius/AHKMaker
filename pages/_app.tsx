import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== undefined) {
    return <Component {...pageProps} />
  }

}

export default MyApp