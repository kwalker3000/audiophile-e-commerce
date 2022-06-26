
import React from 'react';

export const UpdateCart = ({updateCart, orderSize}) => {


    return (
        <div
	    id="add-cart">
          <div className="add-cart">
            <div className="add-cart__btn">
              <button className="btn btn-text btn_active"
                aria-label="add to cart"
                      onClick={() => updateCart(orderSize)}>
		  update cart
	      </button>
            </div>
          </div>
        </div>
    )
}
