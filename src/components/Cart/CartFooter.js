import React from 'react'

import { UpdateCart } from './UpdateCart'

export const CartFooter = ({
  invoice,
  orderSize,
  updateCart,
  handleDropDown,
  renderCart,
  isUpdateCart,
  isCheckout,
  checkoutCart,
}) => {
  return (
    <>
      {isUpdateCart ? (
        <UpdateCart
          orderSize={orderSize}
          updateCart={updateCart}
          handleDropDown={handleDropDown}
          renderCart={renderCart}
        />
      ) : (
        <div className="dropdown__tail tail-wrapper">
          <p className="paragraph">Total</p>
          <p className="head_level-3">
            $ {invoice.cart.toLocaleString('en-US')}
          </p>
          <button
            className="btn btn-text btn-dark btn-dark_active"
            onClick={checkoutCart}
            disabled={cart.length == 0}
          >
            checkout
          </button>
        </div>
      )}
    </>
  )
}
