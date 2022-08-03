
import React, { useReducer } from 'react'

export const useAddress = () => {

    let initialState = {
      name: 'Kevin',
      email: 'mail@mail.com',
      phone: '',
      line1: '22 Street Dr',
      line2: '',
      zip: '63304',
      city: '',
      country: 'US',
      region: 'MO',
    }
// let initialState = {
//       name: '',
//       email: '',
//       phone: '',
//       line1: '',
//       line2: '',
//       zip: '',
//       city: '',
//       country: '',
//       region: '',
//     }

    const reducer = (state, action) => {

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
        case 'SET VALUE':
          return {
            ...state,
            [action.payload.key]: action.payload.value,
          }
        default:
          throw new Error(`Unknown action ${action.type}`)
      }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
 
const inputAction = (event) => {
    dispatch({
    type: 'UPDATE',
    payload: { key: event.target.name, value: event.target.value },
    })
}

const replaceAction = (city) => {
    dispatch({
    type: 'REPLACE CITY',
    payload: { key: 'city', value: city },
    })
}

    const setAction = (name, value) => {
	dispatch({
	    type: 'SET VALUE',
	    payload: { key: name, value: value}
	})
    }

    return [state, {inputAction, replaceAction, setAction}] 
}

