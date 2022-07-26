import React, { useState } from 'react'

export const Overlay = ({ isMenuOpen, isCartOpen, isAccountOpen }) => {
    const display = isMenuOpen || isCartOpen || isAccountOpen
	  ? 'block' : 'none'
  return (
    <div
      className="overlay"
      style={{ display: display }}
      data-testid="overlay"
    ></div>
  )
}
