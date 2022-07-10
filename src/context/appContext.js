import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
  const [countryList, setCountryList] = useState([])
  const [invoice, setInvoice] = useState({
    cart: 0,
    ship: null,
  })
  const [cart, setCart] = useState([])
  const [stockWarn, setStockWarn] = useState(false)
  const [address, setAddress] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'UPDATE':
          return {
            ...state,
            [action.payload.key]: action.payload.value,
          }
        case 'REPLACE CITY':
          return {
            ...state,
            [action.payload.key]: action.payload.value,
          }
        default:
          throw new Error(`Unknown action ${action.type}`)
      }
    },
    {
      name: '',
      email: '',
      phone: '',
      line1: '',
      line2: '',
      zip: '',
      city: '',
      country: '',
      state: '',
    }
  )

  const inputAction = (event) => {
    setAddress({
      type: 'UPDATE',
      payload: { key: event.target.name, value: event.target.value },
    })
  }

  const replaceAction = (city) => {
    setAddress({
      type: 'REPLACE CITY',
      payload: { key: 'city', value: city },
    })
  }

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
      prevCart.map((item, index) => {
        return { ...item, quantity: item.quantity + pendingCount[index] }
      })
    )
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

    console.log((process.env.NODE_ENV) == 'development')

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
