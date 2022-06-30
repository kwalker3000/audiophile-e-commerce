import React, { useState, createContext, useContext, useEffect } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

//import { useCartUpdate } from '../hooks/useCartUpdate';

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
    const cookies = parseCookies()
    console.log(cookies)
  const [cart, setCart] = useState([])
  const [stockWarn, setStockWarn] = useState(false)

    useEffect(() => {
	let customerCart = JSON.stringify(cart)
	console.log(customerCart)
	setCookie(null, 'shoppingCart', customerCart, {
	    maxAge: 24 * 60 * 60,
	    path: '/'
	})
	let newCart = [];
	
    }, [cart])

  let resetWarn = () => {
    setStockWarn(false)
  }

  let addCart = (product, size = 1) => {
    let inCart = cart.find((item) => item.id == product._id)
    if (inCart) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id == product._id) {
            if (item.quantity + size > item.available) {
              setStockWarn(true)
              return item
            }
            return { ...item, quantity: item.quantity + size }
          }
          return item
        })
      )
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          name: product.altname ? product.altname : product.name,
          price: product.price,
          img: product.image.mobile,
          quantity: size,
          available: product.stock,
            id: product._id,
            stripe_id: product.stripe
        },
      ])
    }
  }

  let updateCart = (pendingCount) => {
    setCart((prevCart) =>
      prevCart.map((item, index) => {
        return { ...item, quantity: item.quantity + pendingCount[index] }
      })
    )
  }

  let emptyCart = () => setCart([])

  return (
    <AppContext.Provider
      value={{
        addCart,
        updateCart,
        emptyCart,
        stockWarn,
        resetWarn,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext }

export const useAppContext = () => {
  return useContext(AppContext)
}
