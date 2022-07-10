import React from 'react'

import { CartList } from '../components/Cart/CartList'

export const Summary = ({ cart, hasRates, rates, cartTotal, shippingCost }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div id="ship-form">
      <div className="dropdown__total total-wrapper">
        <p className="paragraph" style={{ opacity: 1 }}>
          <span style={{ opacity: 0.55 }}>
            {' '}
            Cart ({cart.reduce((pre, accum) => pre + accum.quantity, 0)}){' '}
          </span>
          <svg
            style={{
              cursor: 'pointer',
              margin: '0 0 0 8px',
              opacity: '100%',
              transform: `${isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'}`,
            }}
            className={`${isOpen && 'down-arrow'}`}
            onClick={() => setIsOpen(!isOpen)}
            width="7"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1l4 4-4 4"
              stroke="#E7816B"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
              opacity="1"
            />
          </svg>
        </p>
        <p className="head_level-3">$ {cartTotal.toLocaleString('en-US')}</p>
      </div>

      {isOpen && (
        <div className={`${isOpen ? 'open-accord' : 'close-accord'}`}>
          <CartList cart={cart} isCheckout={true} updateOrderSize={null} />

          <div className="dropdown__total total-wrapper">
            <p className="paragraph">shipping </p>
            <p className={hasRates && rates.length ? 'head_level-3' : 'status'}>
              {shippingCost
                ? '$ ' + shippingCost.toLocaleString('en-US')
                : '(pending)'}
            </p>
          </div>
          <div className="dropdown__total total-wrapper">
            <p className="paragraph">tax </p>
            <p className="status">(pending)</p>
          </div>
        </div>
      )}
      <div className="dropdown__total total-wrapper grand">
        <p className="paragraph">total </p>
        <p className="status">
          $ {(cartTotal + shippingCost).toLocaleString('en-US')}
        </p>
      </div>
    </div>
  )
}
