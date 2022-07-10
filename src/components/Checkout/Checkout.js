import React, { useState, useEffect } from 'react'

import { ShipForm } from './Shipping/ShipForm'
import { ShipEstimate } from './Shipping/ShipEstimate'

export const Checkout = ({ cart, cartTotal, getShipValue, shipTotal }) => {
  const [hasEstimate, setHasEstimate] = useState(false)

  let acceptShipRate = () => {
    setHasEstimate(true)
  }

  return (
    <div id="checkout">
      <div className="checkout">
        <h1 className="checkout__head head_level-1">checkout</h1>

        <div className="checkout__ship-form form">
          <div>
            <h2 className="form__head head_level-2">
              {!hasEstimate ? 'estimate shipping' : 'shipping info'}
            </h2>
          </div>

          <div>
            {!hasEstimate ? (
              <ShipEstimate
                cartTotal={cartTotal}
                getShipValue={getShipValue}
                acceptShipRate={acceptShipRate}
              />
            ) : (
              <ShipForm
                cartTotal={cartTotal}
                shipTotal={shipTotal}
                cart={cart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
