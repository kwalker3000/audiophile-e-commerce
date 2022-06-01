import React from 'react'

import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { PrimaryNav } from './PrimaryNav'
import { Cart } from './Cart'


export const Header = () => {
    return (
        <div className="header">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header-mob__nav">
            <MobileNav />
          </div>
          <div className="header-desk__nav">
            <PrimaryNav />
	  </div>
          <div className="header__cart">
            <Cart/>
          </div>
        </div> 
    )
}
