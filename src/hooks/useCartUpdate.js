import React, { useReducer } from 'react'

export let useCartUpdate = (action) => {
  const initialState = []

  let reducer = (state, action) => {
    switch (action.type) {
      case 'ADD TO CART':
        return addCart(state, action.payload)
      case 'UPDATE CART':
        console.log(action.payload)
        return
      case 'RESET CART':
        return initialValue
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  let addCart = (cart, { product, size = 1 }) => {
    let inCart = cart.find((item) => item.id == product._id)

    if (inCart) {
      cart.map((item) => {
        if (item.id == product._id) {
          return { ...item, count: item.count + size }
        }
        return item
      })
      return cart
    } else {
      let newCartItem = {
        name: product.altname ? product.altname : product.name,
        price: product.price,
        img: product.image.mobile,
        count: size,
        limit: product.stock,
        id: product._id,
      }
      return [...state, newCartItem]
    }
  }

  let updateCart = (pendingCart) => {
    pendingCart.forEach((item) => {
      setCart((prevCart) =>
        prevCart.map((product) => ({ ...product, count: item.count }))
      )
    })
  }

  let emptyCart = () => setCart([])

  return [state, dispatch]
}
