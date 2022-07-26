import { useEffect } from 'react'
import { useAppContext } from '../src/context/appContext'
import Head from 'next/head'
import styles from '../styles/modules/Category.module.css'

import { MongoClient } from 'mongodb'

import { Headline } from '../src/components/Headline'
import { ProductQkView } from '../src/components/Product/ProductQkView'
import { Header } from '../src/components/Header/Header'
import { Menu } from '../src/components/Menu/Menu'
import { About } from '../src/components/About'
import { Footer } from '../src/components/Footer/Footer'

export default function Headphones({ data, user }) {
  data = data.sort((a, b) => b.new - a.new)

  return (
    <div className={styles.page}>
      <Head>
        <title>Headphones | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.pageHeader}>
        <Header user={user}/>
      </header>
      <main className={`${styles.pageMain} ${styles.main}`}>
        <section className={styles.mainHeadline}>
          <Headline title="headphones" />
        </section>
        <section className={`${styles.ProductQkView} ${styles.mainQkView}`}>
          <ProductQkView data={data} />
        </section>
        <section className={styles.mainMenu}>
          <Menu />
        </section>
        <section className={styles.mainAbout}>
          <About />
        </section>
      </main>
      <footer className={styles.pageFooter}>
        <Footer />
      </footer>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
    let { authOptions } = require('./api/auth/[...nextauth]');
    let { unstable_getServerSession } = require('next-auth/next');

    let session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);

    let user = session === null ? {} : session.user
    user.id = user.id === undefined ? null : user.id
    user.name = user.name === undefined ? null : user.name
    user.image = user.image === undefined ? null : user.image

  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db('audiophile')
  const yourCollection = db.collection('product')

  let cursor = await yourCollection.find({ category: 'headphones' })
  let data = []

  await cursor.forEach((entry) => {
    entry._id = entry._id.toString()
    data.push(entry)
  })

  cursor.close()

  return {
    props: {
      data,
      user: {
	id: user.id,
	name: user.name,
	img: user.image
      }

    },
  }
}
