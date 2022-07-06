
import React, { useState } from 'react';

import { useAppContext } from '../../context/appContext';
import { LinkBtn } from '../../components/LinkBtn';
import { ShipRates } from './ShipRates'
import { Totals } from '../../components/Totals';

export const Estimates = ({cartTotal, getShipValue, acceptShipRate}) => {

    const [isValid, setIsValid] = useState(true);
    const [hasRates, setHasRates] = useState(false);
    const [rates, setRates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [shippingCost, setShippingCost] = useState(null);

    let { address, inputAction, replaceAction, countryList, cart } = useAppContext();

    let {name, email, phone, line1, line2, zip, city, country, state} = address

    let countries = countryList.map((country, index) => (
        <option className="options" value={`${country[1]}`} key={index}>{country[0]}</option>
    ))

    let carriers;


    let validateForm = async (address) => {
	
        let geoLoc = await fetch('/api/create-geo-location', {
            method: "POST", 
                headers: {"Content-Type": "application/json"},
            body: JSON.stringify({address})
            
        });

        try {
	    let data = await geoLoc.json();
	    return data;
        }
        catch (err) {
            console.error(err);
            return
        }
    }

    let getShipRates = async (coordinates, address, cart) => {
        
        let rates = await fetch('/api/create-ship-rates', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({geo: coordinates, address, cart})
        });

        let data = await rates.json();
        return data;
    }

    let handleSubmit = (e, address, shopCart = cart) => {

        if (shippingCost) {
            acceptShipRate();
            return;
        }
        setIsLoading(true);
	e.preventDefault();
	validateForm(address)
            .then(geoCord => {
                if (!geoCord) {
                    setIsValid(false);
                    replaceAction("");
                    throw new Error('error');
                }
                else {
                    setIsValid(true)
                    let city = geoCord.name;
                    replaceAction(city);
                    return geoCord;
                }
            }).then(geoCord => getShipRates(geoCord, address, shopCart))
            .then(rates => {
                setRates(rates);
                setHasRates(true);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);  
                setIsLoading(false);
            })
    }

    let handleChange = (e) => {
        inputAction(e);
        setHasRates(false);
        setIsValid(true);
        setShippingCost(null)
    }

    let getShippingCost = value => {
        value = Number(value)
        value == -1 ? setShippingCost("N/A") : setShippingCost(value)
        getShipValue(value)
    }
    
    return (
        <div id="ship-form">
	  <form
            className="ship-form"
            onSubmit={(e) => handleSubmit(e, address)}>

              <div>
		<label
                  htmlFor="zip"
                  className="form__label label">ZIP or Postal Code</label>
		<input
                  className="form__input input"
                  type="text"
                  inputMode="numeric"
                  id="zip"
                  name="zip"
                  placeholder="48103"
                  value={zip}
                  onChange={(e) => handleChange(e)}
                  required />
              </div>
      
              <div className="country custom-select">
		<label
                  htmlFor="country"
                  className="form__label label">Country</label>

                <select
                  value={country}
                  name="country"
                  id="country"
                  onChange={(e) => handleChange(e)} required>
                  <option value="">--- SELECT ---</option>
                  {countries}
                </select>


              </div>


            {!isValid ?
             <div
               style={
                   {
                       color: "#cd2c2c",
                       textAlign: "center"
                   }}>
               Sorry, we could not find a match.
             </div> : <></>}

            {hasRates && rates.length == 0 ?
             <div style={
                 {
                     color: "#cd2c2c",
                     textAlign: "center"
                 }}>
               Unfortunately, we currently cannot deliver to this area.
             </div> : <></> }

            {hasRates && rates.length > 0 &&
             <ShipRates
               rates={rates}
               getShippingCost={getShippingCost}/>}

            <Totals
              cart={cart}
              hasRates={hasRates}
              rates={rates}
              cartTotal={cartTotal}
              shippingCost={shippingCost}/>

	    <button
              className={`${isLoading ? "" : "btn-dark_active"} btn btn-text btn-dark`}
              type="submit"
              disabled={
                  isLoading
                  || !isValid
                  || hasRates && rates.length == 0}>
              <span className="btn-text">
                {isLoading ? <div
                               className="spinner"
                               id="spinner">
                             </div> : "Continue"}
                      </span>
	             </button>
	    </form>

        </div>
    )
}
