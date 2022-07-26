
const { db } = require('../../lib/database');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27; orders_beta=v4',
});

export default async function handler(req, res) {

    let { guest } = req.body

    let { store, stripeOrderId, total } = guest
    const GUEST_ID = 15
    const STATUS = 'complete'

    let results = await db.task(async t => {

	await db.none('INSERT INTO orders (user_id, stripe_order, amount, store_id, status) VALUES ($1, $2, $3, $4, $5)', [GUEST_ID, stripeOrderId, total, store, STATUS])

	let storeInfo = await t.one('SELECT * FROM stores WHERE id = $1', store)

	return storeInfo
	
    })
	.catch(err => console.error(err))


    if (!results) {
	res.status(400).send()
    }

    res.status(200).send(results)
}
