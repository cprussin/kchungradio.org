/* eslint-disable react/prop-types */

import React from 'react'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'

import Navbar from '../components/Navbar'

import '@fortawesome/fontawesome-svg-core/styles.css'

import '../css/style.css'

config.autoAddCss = false

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KCHUNG Radio 1630AM</title>
        <link rel="icon" type="image/png" href="/img/favicon.ico" />
        <meta property="og:image" content="/img/kchungforfacebook.jpg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App
