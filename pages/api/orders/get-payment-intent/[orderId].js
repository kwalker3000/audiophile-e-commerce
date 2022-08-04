
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27; orders_beta=v4',
});

export default async function handler(req, res) {

    const { orderId } = req.query

    let order = await stripe.orders.retrieve(orderId)
    let intentId = order.payment.payment_intent
    let payment = await stripe.paymentIntents.retrieve(intentId, {
	expand: ['charges']
    })
    let receiptUrl = payment.charges.data[0].receipt_url

    if (!order) {
	res.status(400).send()
    }
    else {
	res.status(200).send({receiptUrl})
    }
}
