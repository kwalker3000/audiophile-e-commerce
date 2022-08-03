
import React from 'react'

import { LinkBtn } from '../LinkBtn'
import { CartList } from '../Cart/CartList'

import { useAppContext } from '../../context/appContext'

export const OrderReview = ({handlePopOver, total, cart}) => {

//    let { cart, emptyCart } = useAppContext()
    
    return (
        <div id="order-review">
          <div className="order-review">
            <div className="order-review__svg-wrapper svg-wrapper">
		<svg className="order-review__svg" width="64" height="64"
		    xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fillRule="evenodd">
		    <circle fill="#D87D4A" cx="32" cy="32" r="32"/>
		  <path
                    stroke="#FFF"
                    strokeWidth="4"
                    d="m20.754 33.333 6.751 6.751 15.804-15.803"/>
		</g>
		</svg>
		<svg /* width="24px" height="24px" */
                     onClick={() => handlePopOver()}
                  className="close-svg"
		    viewBox="0 0 24 24"
		    xmlns="http://www.w3.org/2000/svg">
		    <g data-name="Layer 2">
		    <g data-name="close">
		      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"/>
			<path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
		    </g>
		    </g>
		</svg>
	    </div>
            <div>
		<h2 className="order-review__head head_level-2">thank you for your order</h2>
	      <p
                className="order-review__body paragraph"
                style={{textTransform: 'none', fontWeight: 500}}>
                You will receive an email confirmation shortly.</p>
	    </div>
            <div className="order-review__summary summary-wrapper">
              <div className="order-review__items items-wrapper">
		<div
		    className="cartlist-wrapper"
		>
		    <CartList isCheckout={true} cart={cart}/>
		</div>
		{(cart.length > 1) && <div className="order-review__extra extra-wrapper">
		    <p
		    className="paragraph"
		    style={{fontSize: '12px', textTransform: 'none'}}>
		    and {cart.length -1} other item(s)</p>
		</div>}
	      </div>
              <div className="order-review__total total-wrapper">
                <h5 className="total__head_5 head_level-5">total</h5>
                <h6 className="total__head_6 head_level-6">$ {(total / 100).toLocaleString('en-US')}</h6>
              </div>
            </div>
            <div className="btn-wrapper" onClick={() => handlePopOver()}>
              <LinkBtn path={"/"} theme="dark" text="back to home"/>
            </div>
          </div>
        </div>
    )
}
