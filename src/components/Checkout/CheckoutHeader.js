import React, { useEffect, useState } from 'react'

import { Logo } from '../Logo'
import { UserAvatar } from '../Header/User/UserAvatar'

export const CheckoutHeader = ({ isCartUpdate, renderCart }) => {
  return (
    <div className="checkout-header">
      <div
        className="checkout-header__logo"
        style={{
          position: 'relative',
          zIndex: '1',
        }}
      >
        <Logo />
      </div>
      {/* <div className="svg"> */}
      {/*     <UserAvatar /> */}

      {/* </div> */}
    </div>
  )
}
