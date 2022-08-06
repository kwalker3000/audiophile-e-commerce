const { db } = require('../../lib/database')

export default async function handler(req, res) {
  let { userId, order } = req.body

  let result
  try {
    const sql =
      'UPDATE orders SET stripe_order = $1, amount = $2 WHERE user_id = $3 AND status = $4 RETURNING stripe_order'
    let params = [order.id, order.amount_total / 100, userId, 'pending']

    result = await db.one(sql, params)
  } catch (err) {
    console.log(err)
    return
  }

  if (!result) {
    res.status(400).send()
  }
  res.status(200).send()
}
