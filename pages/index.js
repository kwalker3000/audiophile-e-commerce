
import { readFileSync } from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import styles from '../styles/modules/Home.module.css'

import { Header } from '../src/components/Header/Header'
import { Hero } from '../src/components/Home/Hero'
import { Menu } from '../src/components/Menu/Menu'
import { FeatureProductA } from '../src/components/Home/FeatureProductA'
import { FeatureProductB } from '../src/components/Home/FeatureProductB'
import { FeatureProductC } from '../src/components/Home/FeatureProductC'
import { About } from '../src/components/About'
import { Footer } from '../src/components/Footer/Footer'

import { useAppContext } from '../src/context/appContext'

import { ChatIcon } from '../src/components/Ably/ChatIcon'
const AblyChatComponent = dynamic(
  () => import('../src/components/Ably/AblyChatComponent'),
  { ssr: false }
)
export const logIn = () => {
    signIn();
    return
}

export const logOut = () => {
    signOut();
    return
}

export default function Home({ countryList=null, user }) {

  let { setCountries } = useAppContext()

  const [isOpenChat, setIsOpenChat] = useState(false)

  let toggleChat = () => {
    setIsOpenChat(!isOpenChat)
  }

  useEffect(() => {
    setCountries(countryList)
  }, [])

  return (
    <div className={styles.page}>
      <Head>
        <title>Home | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <header className={styles.pageHeader}>
            <Header user={user}/>
          </header>

          <main className={`${styles.pageMain} ${styles.main}`}>
            <div className={`${styles.mainChat}`} >
	      {isOpenChat && <AblyChatComponent />}
            </div>
            <div className={`${styles.chatButton}`} onClick={toggleChat} aria-label={`${isOpenChat ? 'close chat' : 'open chat'}`}>
              <ChatIcon isOpenChat={isOpenChat}/>
            </div>

            <section className={`${styles.mainHero}`}>
              <Hero />
            </section>

            <section className={`${styles.mainProductNav}`}>
              <Menu />
            </section>

            <section className={`${styles.mainFtProd} ${styles.ftProd}`}>
              <div className={`${styles.ftProdA}`}>
                <FeatureProductA />
              </div>
              <div className={`${styles.ftProdB}`}>
                <FeatureProductB />
              </div>
              <div className={`${styles.ftProdC}`}>
                <FeatureProductC />
              </div>
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

export async function getServerSideProps(ctx) {
    let { authOptions } = require('./api/auth/[...nextauth]');
    let { unstable_getServerSession } = require('next-auth/next');

    let session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);

    let user = session === null ? {} : session.user
    user.id = user.id === undefined ? null : user.id
    user.name = user.name === undefined ? null : user.name
    user.image = user.image === undefined ? null : user.image

    const fileName = path.join(process.cwd(), 'public', 'assets', 'static', 'data.csv')

  const readFile = async (fileName) => {
    try {
        const data = readFileSync(fileName, 'utf8')
      let array = await data.split('\r')
      await array.shift()
      let countries = await array.map((country) => country.slice(1))

      return countries
    } catch (err) {
      console.log(err)
    }
  }

    let countryList = await readFile(fileName)

  return {
    props: {
        countryList,
        user: {
            id: user.id,
            name: user.name,
            img: user.image
        }
    },
  }

}
