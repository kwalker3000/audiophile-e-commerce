import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Footer} from '../src/components/Footer'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet" /> 
        <link href="../styles/globals.css" rel="stylesheet" type="text/css"/>
      </Head>
      <Footer/>

    </div>
  )
}
