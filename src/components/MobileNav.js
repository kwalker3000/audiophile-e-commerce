import React, { useState } from 'react'
import Image from 'next/image'

import { Menu } from './Menu'
import { Burger } from './Burger'

import burger from '../../public/assets/shared/tablet/icon-hamburger.svg'

export const MobileNav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`mobile-nav`}>
      <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen ? (
        <div className="mobile-nav__menu">
          <Menu toggleMenu={toggleMenu} isRenderedByNav={true} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
