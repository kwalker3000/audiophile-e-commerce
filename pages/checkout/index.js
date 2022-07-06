import React from "react";

import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useAppContext } from "../../src/context/appContext";
import CheckoutForm from "../../src/components/Checkout/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
  betas: ["process_order_beta_1"],
  apiVersion: "2020-08-27; orders_beta=v4"
});

export default function CheckoutPage({prices}) {

  const [clientSecret, setClientSecret] = React.useState("");

    let { data } = prices
    let { cart, address } = useAppContext();
    let cartCheckout = [];

    cart.forEach(item => {
        let product = data.find(stripe => stripe.product.default_price == item.stripe_id);
        cartCheckout.push(
            {
	    quantity: item.quantity,
	    price_data: {
		currency: "usd",
		unit_amount: item.price * 100,
		tax_behavior: "exclusive",
		product: product.product.id,
	    },
	    })
    })    


  React.useEffect(() => {

    const items = cartCheckout;

    fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
	body: JSON.stringify({ items: cartCheckout, address }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, []);

  const appearance = {
      theme: 'flat',
  variables: {
    fontFamily: ' "Manrope", sans-serif',
      fontSizeBase: '14px',
    fontLineHeight: '1.5',
    borderRadius: '8px',
    colorBackground: '#F6F8FA',
      colorPrimaryText: '#262626',
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
    },
    '.Input': {
      padding: '18.5px 24px'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      margin: '0 12px 24px 0',
      border: 'none'
    },
      '.TabIcon': {
          color: 'var(--colorIconTab)'
      },
    '.Tab:hover': {
      border: 'none',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
    },
      '.Tab--selected': {
          border: '1px solid #d87d4a',
	  backgroundColor: '#fff',
      },
      '.TabIcon--selected': {
          color: '#d87d4a'  
      },
    '.Label': {
        fontWeight: '700',
        fontSize: '12px',
        margin: '0 0 7.8px 0'
    },
      '.Input': {
          border: '1px solid #cfcfcf',
	    margin: '0 0 24px 0',
          backgroundColor: '#fff',
      },
      '.Error': {
          margin: '-14px 0 8px 0',
      }

  }
 };

  const options = {
    clientSecret,
    appearance,
      fonts: [
          {
              cssSrc: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap'
          }
      ]
  };

  return (
      <div className="App"
        id="checkout-page">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm address={address}/>
        </Elements>
      )}
    </div>
  );
}


export const getServerSideProps = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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


