import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { useAddress, input, replace } from '../hooks/useAddress'

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
  const [countryList, setCountryList] = useState([])
  const [invoice, setInvoice] = useState({
    cart: 0,
    ship: null,
  })
  const [cart, setCart] = useState([])
  const [stockWarn, setStockWarn] = useState(false)
  const [address, { inputAction, replaceAction, setAction }] = useAddress()

  let setCountries = (list) => {
    let countries = []
    for (let country of list) {
      let tuple = country.replace('"', '').split(',')
      countries.push(tuple)
    }
    setCountryList(countries)
    let countryList = JSON.stringify(countries)
    localStorage.setItem('countries', countryList)
  }

  let handleChange = (e) => {
    let { name, value } = e.target
    setAddress((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  let resetWarn = () => {
    setStockWarn(false)
  }

  let updateInvoice = (key, val) => {
    setInvoice((preVal) => ({ ...preVal, [key]: val }))
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
          stripe_id: product.stripe,
          weight: product.weight,
        },
      ])
    }
  }

  let updateCart = (pendingCount) => {
    setCart((prevCart) =>
      prevCart
        .map((item, index) => {
          return { ...item, quantity: item.quantity + pendingCount[index] }
        })
        .filter((item, index) => item.quantity !== 0)
    )
    destroyCookie(null, 'shoppingCart', { path: '/' })
  }

  let emptyCart = () => {
    setCart([])
    destroyCookie(null, 'shoppingCart', { path: '/' })
  }

  useEffect(() => {
    if (cart.length == 0) {
      const cookies = parseCookies()
      if (cookies) {
        let { shoppingCart } = cookies
        if (shoppingCart && shoppingCart.length > 0) {
          setCart(JSON.parse(shoppingCart))
        }
      }
    }

    if (cart.length > 0) {
      let customerCart = JSON.stringify(cart)
      setCookie(null, 'shoppingCart', customerCart, {
        maxAge: 24 * 60 * 60,
        path: '/',
      })
    }

    let countryArr = JSON.parse(localStorage.getItem('countries'))
    if (countryArr && countryList.length == 0) {
      setCountryList(countryArr || countryList)
    }
  }, [cart])

  return (
    <AppContext.Provider
      value={{
        cart,
        addCart,
        updateCart,
        emptyCart,
        stockWarn,
        resetWarn,
        address,
        inputAction,
        replaceAction,
        setAction,
        setCountries,
        countryList,
        invoice,
        updateInvoice,
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
