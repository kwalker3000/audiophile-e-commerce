
import React from 'react';

import { Button } from './Button';

export const AddCart = ({addCart, product}) => {

    return (
        <div
	    id="add-cart"
	    onClick={() => addCart(product)}
	    onKeyPress={() => addCart(product)}
	    tabIndex={0}>
          <div className="add-cart">
            <div className="add-cart__btn">
              <Button
                bk="#D87D4A"
                bkhvr="#FBAF85"
                clr="#FFF"
                clrhvr="#FFF"
                  txt="add to cart"/>
            </div>
          </div>
        </div>
    )
}
