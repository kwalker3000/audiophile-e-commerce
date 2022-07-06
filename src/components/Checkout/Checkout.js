
import React, { useState, useEffect } from 'react';

import { ShippingForm } from "./ShippingForm";
import { Estimates } from "./Estimates";
import { ShipRates } from "./ShipRates"

export const Checkout = ({cart, cartTotal, getShipValue, shipTotal}) => {

    const [hasEstimate, setHasEstimate] = useState(false)

    let acceptShipRate = () => {
        setHasEstimate(true)
    }

    return (
        <div id="checkout">
          <div className="checkout">
              <h1 className="checkout__head head_level-1">
                checkout
              </h1>


	    <div className="checkout__ship-form form">
		<div>
		  <h2 className="form__head head_level-2">
                    {!hasEstimate ? "estimate shipping" : "shipping info"}
                  </h2>
		</div>

		<div>
	{!hasEstimate ?
         <Estimates
	    cartTotal={cartTotal}
	    getShipValue={getShipValue}
	    acceptShipRate={acceptShipRate}/>
         : <ShippingForm
             cartTotal={cartTotal}
             shipTotal={shipTotal}
             cart={cart}/>}

		</div>
	    </div>

          </div>
        </div>
    )
}
