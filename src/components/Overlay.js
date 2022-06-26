
import React, {useState} from 'react'
import { useAppContext } from '../context/appContext';


export const Overlay = ({isMenuOpen, isCartOpen}) => {

    const display = isMenuOpen || isCartOpen ? 'block' : 'none';
    return (
        <div
          className="overlay"
          style={{display: display}} data-testid='overlay'>
        </div>
    )
}
