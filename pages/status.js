
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe } from '@stripe/react-stripe-js'

import styles from '../styles/modules/Checkout.module.css'

import { CheckoutHeader } from '../src/components/Checkout/CheckoutHeader'
import { Stepper } from '../src/components/Checkout/Stepper'
import { Footer } from '../src/components/Footer/Footer'

import { Map } from '../src/components/Success/Map'
// import  MapNew  from '../src/components/Success/MapNew'
// import Deck from '../src/components/Success/Deck'

import { useAppContext } from '../src/context/appContext'
//import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  {
    betas: ['process_order_beta_1'],
    apiVersion: '2020-08-27; orders_beta=v4',
  }
)

let img = "../public/assets/map/map-marker.png"

export default function OrderStatusPage() {
  return (
    <div className={styles.page} >
      <Head>
        <title>Checkout | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

	<Elements stripe={stripePromise}>

          <header className={styles.pageHeader}>
            <CheckoutHeader />
          </header>

	  <main className={styles.main}>
            <div className={`${styles.mainGrid} ${styles.grid}`}>
		<section className={styles.gridStepper}>
		    <Stepper />
		</section>

		<section className={styles.gridSummary}>
                  <div></div>
		</section>

	      <section className={styles.gridForm}
                       style={
                           {
                               position: 'relative',
                               height: '400px',

                           }}>
                  <Map />
                  {/* <Deck /> */}
		    {/* <OrderStatus /> */}
		</section>
	    </div>
	</main>

	<footer className={styles.pageFooter}>
            <Footer />
	</footer>
	    
	</Elements>
    </div>
  )
}

function OrderStatus() {
  let { emptyCart } = useAppContext()
  const stripe = useStripe()
  const [message, setMessage] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (!stripe) {
        return
      }

      const clientSecret = new URLSearchParams(window.location.search).get(
        'order_client_secret'
      )

      stripe.retrieveOrder(clientSecret).then(({ order }) => {
        switch (order.payment.payment_intent.status) {
          case 'succeeded':
            //TODO save order to database
            // TODO order_id and product_id associative table
            emptyCart()
            setMessage('Payment succeeded!')
            break
          case 'processing':
            setMessage('Your payment is processing.')
            break
          case 'requires_payment_method':
            setMessage('Your payment was not successful, please try again.')
            break
          default:
            setMessage('Something went wrong.')
            break
        }
      })
    })()
  }, [stripe])

  return (
    <>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </>
  )
}
