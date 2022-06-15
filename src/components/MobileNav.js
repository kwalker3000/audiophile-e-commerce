
import { useAppContext } from '../context/appContext';
import React, {useState} from 'react'
import Image from 'next/image'

import { Menu } from './Menu'
import { Burger } from './Burger'

import burger from '../../public/assets/shared/tablet/icon-hamburger.svg'

export const MobileNav = () => {
    const { isMenuOpen } = useAppContext();
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
