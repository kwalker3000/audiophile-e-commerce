import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

export default function CheckoutForm({ email, order }) {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.processOrder({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${
          process.env.NODE_ENV == 'development'
            ? 'http://localhost:3000/status'
            : 'https://audiophile-tan.vercel.app/status'
        }`,
        receipt_email: email,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  return (
    <form id="stripe-payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button
        className={`btn btn-text ${isLoading ? '' : 'btn-dark_active'}`}
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
