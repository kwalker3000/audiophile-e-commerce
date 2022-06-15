
import React, { useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(1);

    const updateCount = (action) => {
        setCount(pre => action == 'increase' ? pre + 1 : pre - 1)
    }
    // todo disable increment/ decrement when not available
    // run useEffect for out of stock check?
    return (
        <div id="counter">
          <div className="counter">
            <button
              className="decrement btn_counter"
              onClick={() => updateCount('decrease')}>-
            </button>
            <div className="count">{count}</div>
            <button
              className="increment btn_counter"
              onClick={() => updateCount('increase')}>+
            </button>
          </div>
        </div> 
    )
}
