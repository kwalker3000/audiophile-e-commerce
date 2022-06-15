
import React from 'react';

import { Button } from './Button';

export const AddCart = () => {

    return (
        <div id="add-cart">
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
