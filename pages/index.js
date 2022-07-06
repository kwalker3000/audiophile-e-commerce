
import { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/modules/Home.module.css'

import { Header } from '../src/components/Header'
import { Hero } from '../src/components/Hero'
import { Menu } from '../src/components/Menu'
import { FeatureProductA } from '../src/components/FeatureProductA'
import { FeatureProductB } from '../src/components/FeatureProductB'
import { FeatureProductC } from '../src/components/FeatureProductC'
import { About } from '../src/components/About'
import { Footer } from '../src/components/Footer'

import { useAppContext } from '../src/context/appContext'

export default function Home({countryList}) {
    let { setCountries } = useAppContext();

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
        <Header />
      </header>

      <main className={`${styles.pageMain} ${styles.main}`}>
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



export async function getStaticProps() {

    const fs = require('fs/promises')
    const fileName = 'public/assets/static/data.csv';

    const readFile = async fileName => {
        try {
            const data = await fs.readFile(fileName, 'utf8');
	    let array = await data.split('\r');
	    await array.shift();
	    let countries = await array.map(country => country.slice(1))

            return countries
        }
        catch(err) {
            console.log(err)
        }
    }

    let countryList = await readFile(fileName)
    
  return {
      props: {
          countryList
      }
  }
}
