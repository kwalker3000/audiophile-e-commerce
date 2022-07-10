import React from 'react'
import PropTypes from 'prop-types'

import { useAppContext } from '../../context/appContext'
import { Img } from '../../components/Img'
import { Counter } from '../../components/Counter'

export const CartList = ({ cart, isCheckout, orderSize, updateOrderSize }) => {
  let cartItems = cart.map((item, index) => (
    <div className="list__item item-wrapper" key={item.id}>
      <div className="misc-wrapper">
        <div className="list__img img-wrapper">
          <Img defaultImg={item.img} descr={item.name} remote={true} />
        </div>
        <div className="list__text text-wrapper">
          <h3 className="list__head head_level-3">
            {item.name.split(' ').slice(0, -1).join(' ')}
          </h3>
          <p className="list__body paragraph">$ {item.price}</p>
        </div>
      </div>
      <div className="list__counter counter-wrapper">
        {!isCheckout ? (
          <Counter
            stock={item.available}
            orderSize={item.quantity}
            className={{ counter: 'counter_cart', count: 'count_cart' }}
            updateOrderSize={updateOrderSize}
            index={index}
            adjustment={orderSize[index]}
          />
        ) : (
          <p className="paragraph">
            <span style={{ fontSize: '10px' }}>x</span>
            {item.quantity}
          </p>
        )}
      </div>
    </div>
  ))

  return <div>{cartItems}</div>
}
