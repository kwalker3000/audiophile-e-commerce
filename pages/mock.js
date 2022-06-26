
import Head from 'next/head';
import styles from '../styles/modules/Product.module.css';

export default function Mock({data}) {

    return (
      <div className={styles.page}>

      <Head>
        <title>Home | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
