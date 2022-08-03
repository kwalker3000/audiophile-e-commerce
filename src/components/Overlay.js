import React, { useState } from 'react'

export const Overlay = ({ isMenuOpen, isCartOpen, isAccountOpen, hasPopOver }) => {
    const display = isMenuOpen || isCartOpen || isAccountOpen || hasPopOver
	  ? 'block' : 'none'
  return (
    <div
      className="overlay"
	style={{ display: display, zIndex: `${hasPopOver && 2}` }}
      data-testid="overlay"
    ></div>
  )
}
