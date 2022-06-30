import React from "react";
import { useAppContext } from "../../src/context/appContext";

import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../src/components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App({prices}) {
  const [clientSecret, setClientSecret] = React.useState("");

    let { data } = prices

    let { cart } = useAppContext();

    let cartCheckout = [];

    cart.forEach(item => {
        let product = data.find(stripe => stripe.product.default_price == item.stripe_id);
        cartCheckout.push(product)
    })
    //console.log(cartCheckout)


  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartCheckout }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
      theme: 'flat',
  variables: {
    fontFamily: ' "Manrope", sans-serif',
      fontSizeBase: '10px',
    fontLineHeight: '1.5',
    borderRadius: '10px',
    colorBackground: '#F6F8FA',
    colorPrimaryText: '#262626'
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
      padding: '12px'
    },
    '.Input': {
      padding: '12px'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      border: 'none'
    },
    '.Tab:hover': {
      border: 'none',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Label': {
      fontWeight: '700'
    }
  }
 };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}


export const getServerSideProps = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    //const paymentIntent = await stripe.paymentIntents.create({});
    const prices = await stripe.prices.list({
        active: true,
        expand: ["data.product"]
    });

    return {
        props: {
            prices
        }
    };
};
