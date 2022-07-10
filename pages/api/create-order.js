const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27; orders_beta=v4',
})

export default async function handler(req, res) {
  const { items, address, invoice } = req.body

  const order = await stripe.orders.create({
    currency: 'usd',
    line_items: items,
    shipping_details: {
      name: address.name,
      address: {
        line1: address.line1,
        line2: address.line2,
        city: address.city,
        //        state: address.state, (requires ISO codes)
        postal_code: address.zip,
        country: address.country,
      },
    },
    automatic_tax: { enabled: true },
    shipping_cost: {
      shipping_rate_data: {
        display_name: 'shipping',
        type: 'fixed_amount',
        fixed_amount: {
          amount: Math.round(invoice.ship * 100),
          currency: 'usd',
        },
        tax_behavior: 'inclusive',
      },
    },
  })

  res.send({
    order: order,
    clientSecret: order.client_secret,
  })
}
