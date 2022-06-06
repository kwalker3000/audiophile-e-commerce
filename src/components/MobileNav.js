
import React, {useState} from 'react'
import { useAppContext } from '../context/appContext';
import Image from 'next/image'

import { Menu } from './Menu'
import { Burger } from './Burger'

import burger from '../../public/assets/shared/tablet/icon-hamburger.svg'

export const MobileNav = () => {
    const { isMenuOpen } = useAppContext();
    // const [isMenuOpen, setIsMenuOpen] = useState(false)

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
    // }
    return (
        <div
          className={`mobile-nav`}>
          <Burger
          />
          {isMenuOpen
           ? <div className="mobile-nav__menu">
               <Menu />
             </div>
             : ""}
        </div>
    )
}
