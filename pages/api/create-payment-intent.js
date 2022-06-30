// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;
    console.log('you are in handler');
    console.log(items)

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
      shipping: {
          address: {
              city: "saint charles",
              country: "US",
              line1: "37 olde yorkshire ct",
              line2: "",
              postal_code: "63304",
              state: "missouri"
          },
          name: "John"
      }

  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
