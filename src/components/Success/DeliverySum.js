import React from 'react';

import { appContext } from '../../context/appContext'

export const DeliverySum = ({userData, cart}) => {

    let { name, contact, address } = userData

    let getWeight = (cart) => {
	let total = 0
	cart.forEach((item) => (total += item.weight * item.quantity))
	return total
    }

    return (
        <div id="delivery-sum">
          <div className="delivery-sum">
            <div className="delivery-sum__head">
	      <h2 className="head_level-2">delivery to:</h2>
	    </div>
            <div className="delivery-sum__body">
              <div className="bar-1"></div>
              <div className="bar-2"></div>
              <div>
		<p className="label">Name: </p>
		<p className="value">{name}</p>
	      </div>
              <div>
		<p className="label">Address: </p>
		<p className="value">{address.line1}<br/>{address.line2}</p>
	      </div>
              <div>
		<p className="label">City: </p>
		<p className="value">{address.city}</p>
	      </div>
              <div>
		<p className="label">State: </p>
		<p className="value">{address.state}</p>
	      </div>
              <div>
		<p className="label">Postal Code: </p>
		<p className="value">{address.postal_code}</p>
	      </div>
              <div>
		<p className="label">Contact: </p>
		<p className="value">{contact.email}{contact.phone && <br/> }{contact.phone}</p>
	      </div>
              // requires cart but cart is removed
              {/* <div> */}
	      {/* 	<p className="label">Shipping Weight: </p> */}
	      {/* 	<p className="value">{getWeight(cart) / 1000} kg</p> */}
	      {/* </div> */}
	    </div>
          </div>
        </div>
    )
}
