
import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // cart function

    return (
        <AppContext.Provider value={{toggleMenu, isMenuOpen}}>
          {children}
        </AppContext.Provider>
    );

} 

export {AppContext};

export const useAppContext = () => {
    return useContext(AppContext);
}
