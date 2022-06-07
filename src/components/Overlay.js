
import React, {useState} from 'react'
import { useAppContext } from '../context/appContext';


export const Overlay = () => {
    const { isMenuOpen } = useAppContext()
    const display = isMenuOpen ? 'block' : 'none';
    return (
        <div
          className="overlay"
          style={{display: display}} data-testid='overlay'>
        </div>
    )
}
