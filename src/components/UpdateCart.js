import React from 'react'

export const UpdateCart = ({ updateCart, orderSize, handleDropDown }) => {
  let handleUpdate = () => {
    handleDropDown()
    updateCart(orderSize)
  }

  return (
    <div id="update-cart" style={{ width: '100%' }}>
      <div>
        <div className="btn-wrapper">
          <button
            className="btn btn-text btn-light btn-light_active"
            aria-label="add to cart"
            onClick={() => handleDropDown()}
          >
            cancel
          </button>

          <button
            className="btn btn-text btn_active"
            aria-label="add to cart"
            onClick={() => handleUpdate()}
          >
            update
          </button>
        </div>
      </div>
    </div>
  )
}
