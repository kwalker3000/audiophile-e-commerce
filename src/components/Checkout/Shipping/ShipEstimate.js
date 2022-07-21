import React, { useState } from 'react'

import { useAppContext } from '../../../context/appContext'
import { LinkBtn } from '../../../components/LinkBtn'
import { CarrierRates } from './CarrierRates'
import { Summary } from '../../Cart/Summary'

import { validateAddress } from '../../../../lib/validateAddress'
import { getShipRates } from '../../../../lib/getShipRates'

export const ShipEstimate = (
    {
	cartTotal,
	getShipValue,
	acceptShipRate,
	getStoreId,
	getGeoloc
    }) => {
  const [isValid, setIsValid] = useState(true)
  const [hasRates, setHasRates] = useState(false)
  const [rates, setRates] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [shippingCost, setShippingCost] = useState(null)

	let { address, inputAction, replaceAction,
	countryList, cart } =
    useAppContext()
	
  let { zip, country } = address

  let countries = countryList.map((country, index) => (
    <option className="options" value={`${country[1]}`} key={index}>
      {country[0]}
    </option>
  ))

  let handleSubmit = (e, address, shopCart = cart) => {
    if (shippingCost) {
      acceptShipRate()
      return
    }
    setIsLoading(true)
    e.preventDefault()
    validateAddress(address)
      .then((geoCord) => {
        if (!geoCord) {
          setIsValid(false)
          replaceAction('')
          throw new Error('error')
        } else {
	    getGeoloc(geoCord)
          setIsValid(true)
          let city = geoCord.name
          replaceAction(city)
          return geoCord
        }
      })
      .then((geoCord) => getShipRates(geoCord, address, shopCart))
      .then((response) => {
	  let { from, result: rates } = response
	  getStoreId(from.id)
        setRates(rates)
        setHasRates(true)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
      })
  }

  let handleChange = (e) => {
    inputAction(e)
    setHasRates(false)
    setIsValid(true)
    setShippingCost(null)
  }

  let getShippingCost = (value) => {
    value = Number(value)
    value == -1 ? setShippingCost('N/A') : setShippingCost(value)
    getShipValue(value)
  }

  return (
    <div id="ship-form">
      <form className="ship-form" onSubmit={(e) => handleSubmit(e, address)}>
        <div>
          <label htmlFor="zip" className="form__label label">
            ZIP or Postal Code
          </label>
          <input
            className="form__input input"
            type="text"
            inputMode="numeric"
            id="zip"
            name="zip"
            placeholder="48103"
            value={zip}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="country custom-select">
          <label htmlFor="country" className="form__label label">
            Country
          </label>

          <select
            value={country}
            name="country"
            id="country"
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="">--- SELECT ---</option>
            {countries}
          </select>
        </div>

        {!isValid ? (
          <div>
            <p
              style={{
                color: '#cd2c2c',
                fontSize: '14px',
                margin: '-24px auto 14px auto',
                textAlign: 'center',
                width: '225px',
              }}
            >
              Sorry, we could not find a match.
            </p>
          </div>
        ) : (
          <></>
        )}

        {hasRates && rates.length == 0 ? (
          <div>
            <p
              style={{
                color: '#cd2c2c',
                fontSize: '14px',
                margin: '-24px auto 14px auto',
                textAlign: 'center',
                width: '225px',
              }}
            >
		Unfortunately, we currently cannot deliver to {address.city ? `${address.city}, ${address.country}` : 'this area'}.
            </p>
          </div>
        ) : (
          <></>
        )}

        {hasRates && rates.length > 0 && (
          <CarrierRates rates={rates} getShippingCost={getShippingCost} />
        )}

        <Summary
          cart={cart}
          hasRates={hasRates}
          rates={rates}
          cartTotal={cartTotal}
          shippingCost={shippingCost}
        />

        <button
          className={`${
            isLoading ? '' : 'btn-dark_active'
          } btn btn-text btn-dark`}
          type="submit"
          disabled={isLoading || !isValid || (hasRates && rates.length == 0)}
        >
          <span className="btn-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Continue'
            )}
          </span>
        </button>
      </form>
    </div>
  )
}
