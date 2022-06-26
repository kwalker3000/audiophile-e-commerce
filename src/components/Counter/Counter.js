
import React, { useState, useEffect } from 'react';

export const Counter = ({stock, updateOrderSize, orderSize}) => {

    return (
        <div id="counter">
          <div className="counter">
            <button
              className="decrement btn_counter"
              onClick={() => updateOrderSize('decrease')}
              disabled={orderSize < 2}
              aria-label="decrease order size">-
            </button>
            <div className="count">{orderSize}</div>
            <button
              className="increment btn_counter"
		onClick={() => updateOrderSize('increase')}
	      disabled={orderSize >= stock}
              aria-label="increase order size">+
            </button>
          </div>
        </div> 
    )
}
