import React from 'react'
import Image from 'next/image'

import icon from '../../../public/assets/shared/desktop/icon-cart.svg'

export const CartIcon = ({ handleDropDown, isEmpty }) => {
  return (
    <div className="cart-icon">
      <button className="image-wrapper_cart" onClick={() => handleDropDown()}>
        {!isEmpty && <div className="cart-status"></div>}
        <Image src={icon} alt="cart icon" />
      </button>
    </div>
  )
}
