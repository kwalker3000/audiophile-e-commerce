
const { db } = require('../../lib/database');

export default async function handler(req, res) {

    let {storeId, userId, geoloc } = req.body;
    let { lon, lat } = geoloc

	let result = await db.task(async t => {

	    // remove previous 'pending' orders
	    await t.result('DELETE FROM orders WHERE user_id = $1 AND status = $2', [userId, 'pending'])
	   
	    let orderId = await t.one('INSERT INTO orders (user_id, store_id, status) VALUES ($1, $2, $3) RETURNING id', [userId, storeId, 'pending']);

	   let data = await t.one('INSERT INTO shipments (order_id, lon, lat, store_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING order_id', [orderId.id, lon, lat, storeId, userId])

	    return data
	})
	.catch(err => console.error(err))

    if (!result) {
	
	res.status(400).send()
    }
    res.status(200).send()

}
