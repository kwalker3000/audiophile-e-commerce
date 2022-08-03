import React, { useEffect, useState } from 'react'

import { Logo } from '../Logo'
import { MobileNav } from './MobileNav'
import { PrimaryNav } from '../PrimaryNav'
import { Cart } from '../Cart/Cart'
import { User } from '../Header/User/User'
import { Img } from '../Img'
import { Overlay } from '../Overlay'

export const Header = ({ isCartUpdate, renderCart, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(isCartUpdate || false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  let toggleCart = () => {
    setIsCartOpen(!isCartOpen)
    if (isCartUpdate) {
      renderCart()
    }
  }
  let toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  let toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen)
  }

  useEffect(() => {
    if (isCartUpdate) {
      setIsCartOpen(true)
    }
  }, [isCartUpdate])

  return (
    <>
      <div className="header">
        <div
          className="header__logo"
        >
          <Logo />
        </div>
        <div className="header-mob__nav">
          <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="header-desk__nav">
          <PrimaryNav />
        </div>
        <div className="header__container">
          <div className="header__user"
          >
            <User
              user={user}
              isAccountOpen={isAccountOpen}
              toggleAccount={toggleAccount}
            />
          </div>
          <div className="header__cart">
            <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
          </div>
        </div>
      </div>
      <Overlay
        isMenuOpen={isMenuOpen}
        isCartOpen={isCartOpen}
	isAccountOpen={isAccountOpen}
      />
    </>
  )
}
