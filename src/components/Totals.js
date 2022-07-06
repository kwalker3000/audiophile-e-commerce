
import React from 'react';

export const Totals = (
    {
        cart,
        hasRates,
        rates,
        cartTotal,
        shippingCost
    }) => {

    return (
           <div className="">
              <div className="dropdown__total total-wrapper">
                <p
                  className="paragraph">
                  Cart ({cart.reduce((pre, accum) => pre + accum.quantity, 0)})</p>
                <p className="head_level-3">$ {cartTotal.toLocaleString('en-US')}</p>
              </div>  
              <div className="dropdown__total total-wrapper">
                <p
                  className="paragraph">shipping </p>
                <p className={hasRates && rates.length ? "head_level-3" : "status"}>{shippingCost ? '$ ' + shippingCost.toLocaleString('en-US') : "(pending)"}</p>
              </div>  
              <div className="dropdown__total total-wrapper">
                <p
                  className="paragraph">tax </p>
                <p className="status">(pending)</p>
              </div>  
              <div className="dropdown__total total-wrapper grand">
                <p
                  className="paragraph">total </p>
                <p className="status">
                  {(cartTotal+shippingCost).toLocaleString('en-US')}
                </p>
              </div>  

	  </div>
       
    )
}
