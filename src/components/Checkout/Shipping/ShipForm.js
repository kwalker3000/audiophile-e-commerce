
import React, { useState } from 'react'
import { useAppContext } from '../../../context/appContext'
import { LinkBtn } from '../../../components/LinkBtn'
import { Summary } from '../../Cart/Summary'

import { useRouter } from 'next/router'

export const ShipForm = ({ cart, cartTotal, shipTotal }) => {
  const router = useRouter()
  let { address, countryList, inputAction } = useAppContext()

  let { name, email, phone, line1, line2, zip, city, country, state } = address

  let countries = countryList.map((country, index) => (
    <option className="options" value={`${country[1]}`} key={index}>
      {country[0]}
    </option>
  ))

  let handleSubmit = (e) => {
    e.preventDefault()
    //validate
    router.push('/checkout')
  }

  return (
    <div id="ship-form">
      <form className="ship-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name" className="form__label label">
            Name
          </label>
          <input
            className="form__input input"
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
          </label>
          <input
            className="form__input input"
            type="email"
            id="email"
            name="email"
            placeholder="alexei@mail.com"
            value={email}
            onChange={(e) => inputAction(e)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="form__label label">
            Phone Number
          </label>
          <input
            className="form__input input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 202-555-0136"
            value={phone}
            onChange={(e) => inputAction(e)}
          />
        </div>

        <div>
          <label htmlFor="address" className="form__label label">
            Your Address
          </label>
          <input
            className="form__input input"
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
          </label>
          <input
            className="form__input input"
            type="text"
            id="state"
            name="state"
            placeholder="Michigan"
            value={state}
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
