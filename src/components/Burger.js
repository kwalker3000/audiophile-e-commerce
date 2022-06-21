
import React, {useState} from 'react'
//import { useAppContext } from '../context/appContext';
import Image from 'next/image'

import burger from '../../public/assets/shared/tablet/icon-hamburger.svg'

export const Burger = ({toggleMenu, isMenuOpen}) => {
    //const { toggleMenu, isMenuOpen } = useAppContext()
    
    return (
	  <button
            className="image-wrapper_burger burger"
	    onClick={toggleMenu}
            aria-label={isMenuOpen ? "close main menu" : "open main menu"}>
            <Image
              src={burger}
              alt="burger icon"/>
          </button>
    )
}
