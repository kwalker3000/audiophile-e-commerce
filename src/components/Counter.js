
import React, { useState, useEffect } from 'react';

export const Counter = ({stock}) => {

    const [count, setCount] = useState(1);

    const updateCount = (action) => {
        setCount(pre => action == 'increase' ? pre + 1 : pre - 1);
    }
    
    return (
        <div id="counter">
          <div className="counter">
            <button
              className="decrement btn_counter"
              onClick={() => updateCount('decrease')}
              disabled={count < 2}
              aria-label="decrease order size">-
            </button>
            <div className="count">{count}</div>
            <button
              className="increment btn_counter"
		onClick={() => updateCount('increase')}
	      disabled={count >= stock}
              aria-label="increase order size">+
            </button>
          </div>
        </div> 
    )
}
