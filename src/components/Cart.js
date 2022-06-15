
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import cart from '../../public/assets/shared/desktop/icon-cart.svg'

export const Cart = () => {
    let isEmpty = true;
    return (
        <div id="cart">
        <div className="cart">
          <button className="image-wrapper_cart">
	    {!isEmpty ? <div className="cart-status"></div> : ""}
            <Link href="/cart">
              <a>
		<Image
		src={cart}
		alt="cart icon"/>
	      </a>
	    </Link>
          </button>
        </div>
	</div>
    ) 
}
