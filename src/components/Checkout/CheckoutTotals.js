import React from 'react'

export const CheckoutTotals = ({ cart, cartTotal, shipTotal, tax, total }) => {
  return (
    <div className="checkout-totals">
      <div className="checkout-totals__total total-wrapper">
        <p className="paragraph" style={{ opacity: 1 }}>
          <span style={{ opacity: 0.55 }}>
            {' '}
            Cart ({cart.reduce((pre, accum) => pre + accum.quantity, 0)}){' '}
          </span>{' '}
        </p>
        <p className="head_level-3">$ {cartTotal.toLocaleString('en-US')}</p>
      </div>

      <div className="checkout-totals__total total-wrapper">
        <p className="paragraph">shipping </p>
        <p className="head_level-3">$ {shipTotal.toLocaleString('en-US')}</p>
      </div>

      <div className="checkout-totals__total total-wrapper">
        <p className="paragraph">tax {`${tax ? ' (VAT)' : ''}`}</p>
        {tax ? (
          <p className="head_level-3">$ {tax.toLocaleString('en-US')}</p>
        ) : (
          <p className="head_level-3" style={{ fontStyle: 'italic' }}>
            (exempt)
          </p>
        )}
      </div>

      <div className="checkout-totals__total total-wrapper grand">
        <p className="paragraph">total </p>
        <p className="status">$ {total.toLocaleString('en-US')}</p>
      </div>
    </div>
  )
}
