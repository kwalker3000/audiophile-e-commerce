import React from 'react'

export const CartHeader = ({ cart, resetCart }) => {
  return (
    <div className="cart__title title">
      <h2 className="cart__head head_level-2">
        cart {`(${cart.reduce((pre, accum) => pre + accum.quantity, 0)})`}
      </h2>
      <button
        className="btn btn-text btn_cart btn_reset"
        onClick={() => resetCart()}
      >
        Remove all
      </button>
    </div>
  )
}
