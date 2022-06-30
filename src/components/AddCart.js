import React from 'react'

export const AddCart = ({
  addCart,
  product,
  size,
  updateOrderSize,
  renderCart,
}) => {
  let moveToCart = (product, orderSize) => {
    addCart(product, orderSize)
    updateOrderSize('reset')
    renderCart()
  }

  return (
    <div id="add-cart">
      <div className="add-cart">
        <div className="add-cart__btn">
          <button
            className="btn btn-text btn-dark btn-dark_active"
            aria-label="add to cart"
            onClick={() => moveToCart(product, size)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
