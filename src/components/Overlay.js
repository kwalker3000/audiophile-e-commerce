import React, { useState } from 'react'

export const Overlay = ({ isMenuOpen, isCartOpen }) => {
  const display = isMenuOpen || isCartOpen ? 'block' : 'none'
  return (
    <div
      className="overlay"
      style={{ display: display }}
      data-testid="overlay"
    ></div>
  )
}
