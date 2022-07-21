
import React, { useReducer } from 'react'

export const useCart = () => {
   

    const reducer = (state, action) => {

        switch (action.type) {
        case 'ADD TO CART':
            return addCart(action.payload.item, action.payload.quantity);
        case 'UPDATE CART ITEM':
            return updateCart(action.payload.newVal);
        case 'EMPTY CART':
            return emptyCart();
        default:
            throw new Error(`Unknown action ${action.type}`)

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

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
          stripe_id: product.stripe,
          weight: product.weight,
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

  let emptyCart = () => {
    setCart([])
    destroyCookie(null, 'shoppingCart', { path: '/' })
  }

    const add = (item, quantity) => {
        dispatch({
            type: 'ADD TO CART',
            payload: {item, quantity}
        })
    }

    const update = (newVal) => {
        dispatch({
            type: 'UPDATE CART',
            payload: {newVal}
        })
    }


    const empty = () => {
        dispatch({
            type: 'EMPTY CART'
        })
    } 


    return [state, ]


}
