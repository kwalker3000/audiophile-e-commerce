import React, { useState, useEffect } from 'react'

import { useAppContext } from '../../context/appContext'

import { CartIcon } from './CartIcon'
import { CartHeader } from './CartHeader'
import { CartList } from './CartList'
import { CartFooter } from './CartFooter'
import { Checkout } from '../Checkout/Checkout'

export const Cart = ({ toggleCart, isCartOpen, renderCart }) => {
  let { cart, updateCart, emptyCart, invoice, updateInvoice } = useAppContext()

  const [isUpdateCart, setIsUpdateCart] = useState(false)
  const [orderSize, setOrderSize] = useState([])
  const [isCheckout, setIsCheckout] = useState(false)

  let isEmpty = cart.length == 0

  useEffect(() => {
    let arr = new Array(cart.length).fill(0)
    setOrderSize(arr)
    updateInvoice('cart', getCartValue())
  }, [cart, isUpdateCart])

  function getCartValue() {
    let total = 0
    cart.forEach((item) => (total += item.price * item.quantity))
    return total
  }

  let getShipValue = (value) => {
    updateInvoice('ship', value)
  }

  let handleDropDown = () => {
    toggleCart()
    setIsUpdateCart(false)
    setIsCheckout(false)
  }

  let adjustedSize = (adjustment, index) => {
    setIsUpdateCart(true)
    let copy = [...orderSize]
    copy[index] += adjustment
    setOrderSize((pre) => copy)
  }

  let updateOrderSize = (action, index) => {
    switch (action) {
      case 'increase': {
        adjustedSize(1, index)
        break
      }
      case 'decrease': {
        adjustedSize(-1, index)
        break
      }
    }
  }

  let resetCart = () => {
    handleDropDown()
    emptyCart()
  }

  let checkoutCart = () => setIsCheckout(true)

  return (
    <div id="cart">
      <CartIcon handleDropDown={handleDropDown} isEmpty={isEmpty} />

      {isCartOpen && (
        <div className="cart__dropdown dropdown">
          {!isCheckout ? (
            <>
              <CartHeader cart={cart} resetCart={resetCart} />
              <CartList
                cart={cart}
                isCheckout={isCheckout}
                orderSize={orderSize}
                updateOrderSize={updateOrderSize}
              />
              <CartFooter
                invoice={invoice}
                orderSize={orderSize}
                updateCart={updateCart}
                handleDropDown={handleDropDown}
                renderCart={renderCart}
                isUpdateCart={isUpdateCart}
                isCheckout={isCheckout}
                checkoutCart={checkoutCart}
              />
            </>
          ) : (
            <>
              <Checkout
                cartTotal={invoice.cart}
                getShipValue={getShipValue}
                shipTotal={invoice.ship}
                cart={cart}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
