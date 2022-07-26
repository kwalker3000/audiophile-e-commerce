
import React, { useState, useEffect } from 'react'

export const Counter = ({
  stock,
  updateOrderSize,
  orderSize,
  className,
  index,
  adjustment,
  isInCart
}) => {
  adjustment = adjustment || 0

    let limit = isInCart ? 1 : 2

  return (
    <div id="counter">
      <div className={`${className.counter}`}>
        <button
          className="decrement btn_counter"
          onClick={() => updateOrderSize('decrease', index)}
            disabled={(orderSize + adjustment) < limit}
          aria-label="decrease order size"
        >
          -
        </button>
        <div className={`${className.count}`}>{orderSize + adjustment}</div>
        <button
          className="increment btn_counter"
          onClick={() => updateOrderSize('increase', index)}
          disabled={orderSize + adjustment >= stock}
          aria-label="increase order size"
        >
          +
        </button>
      </div>
    </div>
  )
}
