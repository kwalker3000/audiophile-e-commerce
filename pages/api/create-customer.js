
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default async function handler(req, res) {
    const { address } = req.body

    const customer = await stripe.customers.create({
	email: address.email,
	name: address.name,
	phone: address.phone,
	shipping: {
	    address: {
		city: address.city,
		country: address.country,
		line1: address.line1,
		line2: address.line2,
		postal_code: address.zip,
		state: address.state // may not work 
	    },
	    name: address.name
	}
	
    })

    res.send({
	customer: customer
    })
}
