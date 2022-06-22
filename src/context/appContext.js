
import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart, setCart] = useState([])
    // cart array

    let toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    let addCart = (product, size = 1) => {
        console.log(product)
        let inCart = cart.find(item => item.id == product._id);
        if (inCart) {
            setCart(prevCart => prevCart.map(item => {
                if(item.id == product._id) {
                    return {...item, count: item.count+1}
                }
                return item
            }))
        }
        else {
            setCart(prevCart => [...prevCart, {
                name: product.name,
                price: product.price,
                img: product.image.mobile,
                count: 1,
                id: product._id
            }]) 
        }

    }
    //let removeCart
    //let emptyCart

    // const addProducts = (category) => {
    // 	if(!products) {
    // 	    setProducts(category)
    // 	}
    // 	else if(!(products.find(product =>
    // 	    product.category == category[0].category))) {

    // 	    setProducts(preSet => [...preSet, ...category])
    // 	}
    // }
    console.log(cart)

    return (
        <AppContext.Provider value={{toggleMenu, isMenuOpen, addCart}}>
          {children}
        </AppContext.Provider>
    );

} 

export {AppContext};

export const useAppContext = () => {
    return useContext(AppContext);
}
