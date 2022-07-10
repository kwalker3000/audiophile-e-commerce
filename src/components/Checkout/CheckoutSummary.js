import React from 'react'

import { CheckoutCartList } from './CheckoutCartList'
import { CheckoutTotals } from './CheckoutTotals'

export const CheckoutSummary = ({ cart, order }) => {

  let { amount_subtotal, amount_total, total_details, shipping_cost } = order

  let cartTotal = amount_subtotal / 100
  let shipTotal = shipping_cost.amount_total / 100
  let tax = total_details.amount_tax / 100
  let total = amount_total / 100

  return (
    <div id="checkout-summary">
      <div className="checkout-summary">
        <div>
          <h2 className="checkout-summary__head head_level-2 head">Summary</h2>
        </div>

        <div>
          <CheckoutCartList cart={cart} />
        </div>

        <CheckoutTotals
          cart={cart}
          cartTotal={cartTotal}
          shipTotal={shipTotal}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  )
}
