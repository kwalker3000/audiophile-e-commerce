import React, { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { PrimaryNav } from './PrimaryNav'
import { Cart } from './Cart'
import { Overlay } from './Overlay'



export const Header = ({isCartUpdate, renderCart}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(isCartUpdate || false);

    let toggleCart = () => {
	setIsCartOpen(!isCartOpen)
	if(isCartUpdate) {
	  renderCart();   
        }
    }
    let toggleMenu = () => {
	setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
	if (isCartUpdate) {
	    setIsCartOpen(true)
	}
    }, [isCartUpdate])

    return (
        <>
        <div className="header">
          <div className="header__logo"
               style={{position: "relative", zIndex: "1"}}>
            <Logo />
          </div>
          <div className="header-mob__nav">
            <MobileNav
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}/>
          </div>
          <div className="header-desk__nav">
            <PrimaryNav />
	  </div>
          <div className="header__cart">
            <Cart
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}/>
          </div>
        </div> 
          <Overlay
            isMenuOpen={isMenuOpen}
            isCartOpen={isCartOpen}/>

        </>
    )
}
