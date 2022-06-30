
import React from 'react';

export const ShippingForm = () => {

    return (
        <div id="ship-form">
	    <form className="ship-form" action="/api/form" method="post">
              <div>
		<label
                  htmlFor="name"
                  className="form__label label">Name</label>
		<input
                  className="form__input input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Alexei Ward"
                  required />
              </div>

              <div>
		<label
                  htmlFor="email"
                  className="form__label label">Email</label>
		<input
                  className="form__input input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="alexei@mail.com"
                  required />
              </div>
      
               <div>
		 <label
                   htmlFor="phone"
                   className="form__label label">Phone Number</label>
		 <input
                  className="form__input input"
                   type="tel"
                   id="phone"
                   name="phone"
                   placeholder="+1 202-555-0136"
                   required />
              </div>

              <div>
		<label
                  htmlFor="address"
                  className="form__label label">Address</label>
		<input
                  className="form__input input"
                  type="text"
                  id="address"
                  name="line1"
                  placeholder="1137 Williams Street"
                  required />
		<input
                  className="form__input input"
                  type="text"
                  id="address"
                  name="line2"
                  placeholder="Apt 21"
                  required />
              </div>

              <div>
		<label
                  htmlFor="zip"
                  className="form__label label">ZIP Code</label>
		<input
                  className="form__input input"
                  type="text"
                  inputmode="numeric"
                  pattern="\d*"
                  id="zip"
                  name="zip"
                  placeholder="10001"
                  required />
              </div>
      
               <div>
		 <label
                   htmlFor="city"
                   className="form__label label">City</label>
		 <input
                  className="form__input input"
                   type="text"
                   id="city"
                   name="city"
                   placeholder="New York"
                   required />
              </div>
              
              <div>
		<label
                  htmlFor="country"
                  className="form__label label">Country</label>
		<input
                  className="form__input input"
                  type="country"
                  id="country"
                  name="country"
                  placeholder="United States"
                  required />
              </div>


     
      <button className="btn btn-text" type="submit">Submit</button>
	    </form>
        </div>
    )
}
