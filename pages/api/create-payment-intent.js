// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
    let total = 0;
    items.forEach(item => {
        console.log(items)
        total += (item.price * 100) * item.quantity;
    })
    console.log(total)
  return total;
};

const getOrderDetails = (items) => {
    let details = [];
    items.forEach(item => {
        details.push(`${item.name}: ${item.quantity}; `)
    })
    console.log(details)
    return details.join(',');
   
}

export default async function handler(req, res) {
    const { items, address } = req.body;
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
              city: address.city,
              country: address.country,
              line1: address.line1,
              line2: address.line2,
              postal_code: address.zip,
              state: address.state
          },
          name: address.name
      },
      description: getOrderDetails(items),
      receipt_email: address.email
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
