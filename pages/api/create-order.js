
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27; orders_beta=v4'
});

export default async function handler(req, res) {
    const { items, address } = req.body;
    console.log('you are in orders');


    const order = await stripe.orders.create({
	currency: 'usd',
	line_items: items,
// Replace this with checkout form input from the request
    shipping_details: {
      name: address.name,
      address: {
	line1: address.line1,
          line2: address.line2,
        city: address.city,
//        state: 'HE',
        postal_code: address.zip,
        country: address.country,      },
    },
    automatic_tax: {enabled: true},
    });

  res.send({
    clientSecret: order.client_secret,
  });
};
