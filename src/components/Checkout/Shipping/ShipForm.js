import React, { useState, useEffect } from 'react'

import { useSession } from 'next-auth/react'
import { useAppContext } from '../../../context/appContext'
import { LinkBtn } from '../../../components/LinkBtn'
import { Summary } from '../../Cart/Summary'

import { useRouter } from 'next/router'

import { initiateOrder } from '../../../../lib/initiateOrder'
import {
  nameCheck,
  emailCheck,
  phoneCheck,
  regionCheck,
  lineCheck,
} from '../../../../lib/formCheck'

import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const ShipForm = ({ cart, cartTotal, shipTotal, storeId, geoloc }) => {
  const router = useRouter()
  let { address, countryList, inputAction } = useAppContext()
  let { data } = useSession()

  let { name, email, phone, line1, line2, zip, city, country, region } = address

  const [isValidName, setIsValidName] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidLine, setIsValidLine] = useState(true)
  const [isValidRegion, setIsValidRegion] = useState(true)

  let handleSubmit = (e) => {
    e.preventDefault()
    if (
      !(
        isValidName &&
        isValidEmail &&
        isValidPhone &&
        isValidLine &&
        isValidRegion
      )
    ) {
      return
    }

    if (data) {
      initiateOrder(storeId, data.user.id, geoloc)
    } else {
      let guest = {
        store: storeId,
        coord: {
          lon: geoloc.lon,
          lat: geoloc.lat,
        },
      }
      guest = JSON.stringify(guest)
      setCookie(null, 'guest', guest, {
        maxAge: 24 * 60 * 80,
        path: '/',
      })
    }

    router.push('/checkout')
  }

  let validatePhone = (phone) => {
    let isValid = phoneCheck(phone)
    setIsValidPhone(isValid)
  }
  let validateEmail = (email) => {
    let isValid = emailCheck(email)
    setIsValidEmail(isValid)
  }

  useEffect(() => {
    setIsValidName(true)
    setIsValidLine(true)
    setIsValidRegion(true)
    if (name.length > 0 && nameCheck(name)) {
      setIsValidName(false)
    }
    if (line1.length > 0 && lineCheck(line1)) {
      setIsValidLine(false)
    }
    if (region.length > 0 && regionCheck(region)) {
      setIsValidRegion(false)
    }
  }, [address])

  return (
    <div id="ship-form">
      <form className="ship-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name" className="form__label label">
            Name
            {!isValidName && <span className="error-label">Wrong format</span>}
          </label>
          <input
            className={`form__input input ${!isValidName && 'error-input'}`}
            type="text"
            id="name"
            name="name"
            placeholder="Alexei Ward"
            value={name}
            onChange={(e) => inputAction(e)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form__label label">
            Email
            {!isValidEmail && <span className="error-label">Wrong format</span>}
          </label>
          <input
            className={`form__input input ${!isValidEmail && 'error-input'}`}
            type="email"
            id="email"
            name="email"
            placeholder="alexei@mail.com"
            value={email}
            onBlur={(e) => validateEmail(e.target.value)}
            onChange={(e) => inputAction(e)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="form__label label">
            Phone Number
            {!isValidPhone && <span className="error-label">Wrong format</span>}
          </label>
          <input
            className={`form__input input ${!isValidPhone && 'error-input'}`}
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 202-555-0136"
            value={phone}
            onBlur={(e) => validatePhone(e.target.value)}
            onChange={(e) => inputAction(e)}
          />
        </div>

        <div>
          <label htmlFor="address" className="form__label label">
            Your Address
            {!isValidLine && <span className="error-label">Wrong format</span>}
          </label>
          <input
            className={`form__input input ${!isValidLine && 'error-input'}`}
            type="text"
            id="address"
            name="line1"
            placeholder="1137 Williams Street"
            value={line1}
            onChange={(e) => inputAction(e)}
            required
          />
          <input
            className="form__input input"
            type="text"
            id="address"
            name="line2"
            placeholder="Apt 21"
            value={line2}
            onChange={(e) => inputAction(e)}
          />
        </div>

        <div>
          <label htmlFor="zip" className="form__label label">
            ZIP Code
          </label>
        </div>
        <p className="country__body paragraph">{address.zip}</p>

        <div>
          <label htmlFor="city" className="form__label label">
            City
          </label>
        </div>
        <p className="country__body paragraph">{address.city}</p>

        <div>
          <label htmlFor="state" className="form__label label">
            State or Region
            {!isValidRegion && (
              <span className="error-label">Wrong format</span>
            )}
          </label>
          <input
            className={`form__input input ${!isValidRegion && 'error-input'}`}
            type="text"
            id="region"
            name="region"
            placeholder="Michigan"
            value={region}
            minLength="2"
            onChange={(e) => inputAction(e)}
            required
          />
        </div>

        <div className="country custom-select">
          <label htmlFor="country" className="form__label label">
            Country
          </label>

          <p className="country__body paragraph">{address.country}</p>
        </div>
        <Summary
          cart={cart}
          hasRates={true}
          rates={[true]}
          cartTotal={cartTotal}
          shippingCost={shipTotal}
        />

        <button className="btn btn-text btn-dark btn-dark_active">
          continue & pay
        </button>
      </form>
    </div>
  )
}
