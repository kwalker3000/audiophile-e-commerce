
import React, {useState} from 'react'
import Image from 'next/image'

import { Menu } from './Menu'
import { Burger } from './Burger'

import burger from '../../public/assets/shared/tablet/icon-hamburger.svg'

export const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div
          className={`mobile-nav`}>
          <Burger
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}/>
          {isMenuOpen
             ? <Menu className="mobile-nav__menu"/>
             : ""}
        </div>
    )
}
