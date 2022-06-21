
import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //const [isEmpty, setIsEmpty] = useState(true);
    //const [products, setProducts] = useState();
    // cart array

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // const addProducts = (category) => {
    // 	if(!products) {
    // 	    setProducts(category)
    // 	}
    // 	else if(!(products.find(product =>
    // 	    product.category == category[0].category))) {

    // 	    setProducts(preSet => [...preSet, ...category])
    // 	}
    // }

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
