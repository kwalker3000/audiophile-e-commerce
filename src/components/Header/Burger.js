import React, { useState } from 'react'
import Image from 'next/image'

import burger from '../../../public/assets/shared/tablet/icon-hamburger.svg'

export const Burger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      className="image-wrapper_burger burger"
      onClick={toggleMenu}
      aria-label={isMenuOpen ? 'close main menu' : 'open main menu'}
    >
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <g fill={isMenuOpen ? '#d87d4a' : '#fff'} fillRule="evenodd">
          <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
        </g>
      </svg>
    </button>
  )
}
