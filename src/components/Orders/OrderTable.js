import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export const OrderTable = ({ orders }) => {
  const router = useRouter()
  const stripeOrderList = orders.map((order) => order.stripe_order)

  let receiptUrl = async (id) => {
    let getReceiptUrl = async (id) => {
      try {
        let res = await fetch(`/api/orders/get-payment-intent/${id}`)
        let data = await res.json()
        return data.receiptUrl
      } catch (err) {
        console.error(err)
        return
      }
    }
    getReceiptUrl(id).then((url) => {
      window.open(url, '_blank')
    })
  }

  let list = orders.map((order, index) => {
    let id = String(order.id)
    let stripeId = order.stripe_order
    return (
      <div className="table__row" key={index}>
        <button
          role="link"
          aria-label="open receipt url"
          onClick={() => receiptUrl(stripeId)}
          className="table__cell td-1 button"
        >
          #{id.padStart(5, '0')}
        </button>
        <p className="table__cell">
          {order.created.split('').splice(4, 12).join('')}
        </p>
        <p className="table__cell">{order.amount}</p>
      </div>
    )
  })

  return (
    <div id="order-table">
      <div className="order-table table">
        <div className="table__head">
          <div className="table__row">
            <h3 className="table__header head_level-3">order</h3>
            <h3 className="table__header head_level-3">date</h3>
            <h3 className="table__header head_level-3">total</h3>
          </div>
        </div>

        <div className="table__body">{list}</div>
      </div>
    </div>
  )
}
