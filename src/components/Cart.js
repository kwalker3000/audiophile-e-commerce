
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import cart from '../../public/assets/shared/desktop/icon-cart.svg'

export const Cart = () => {
    return (
        <div className="cart">
          <div className="image-wrapper_cart">
            <Image
              src={cart}
              alt="cart icon"/>
          </div>
        </div>
    ) 
}
