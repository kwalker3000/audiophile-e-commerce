import { db } from '../../lib/database'

export default async function handler(req, res) {
  let { userId } = req.body

  let results = await db
    .task('update-order-info', async (t) => {
      await t.none(
        'UPDATE orders SET status = $1 WHERE status = $2 AND user_id = $3',
        ['complete', 'pending', userId]
      )

      const orderLog = await t.one(
        'SELECT * FROM shipments s JOIN orders o ON o.id = s.order_id WHERE o.user_id = $1 ORDER BY created DESC LIMIT 1',
        userId
      )

      let store = await t.one(
        'SELECT * FROM stores WHERE id = $1',
        orderLog.store_id
      )

      return { store, orderLog }
    })
    .catch((err) => console.error(err))

  if (!results) {
    res.status(400).send()
  }

  res.status(200).send(results)
}
