
import React from 'react';

import { Img } from '../Img';
import { AddCart } from '../AddCart';
import { Counter } from '../Counter';


export const ProductOvView = ({product}) => {

    return (
        <div id="prod-ov-view">
          <div className="prod-ov-view">
            
            <div className="prod-ov-view__img img-wrapper">
		<Img
                  key={product._id}
		    remote={true}
		    mobImg={product.image.mobile}
		    tabImg={product.image.tablet}
		    desImg={product.image.desktop}
		    defaultImg={product.image.tablet}
		  descr={product.name}/>
            </div>
            <div className="prod-ov-view__content content-wrapper">
              <div className="prod-ov-view__text-wrapper text-wrapper">
		{product.new
                   ? <p className="prod-ov-view__overline overline">
			new product
		     </p>
                   : <></>}
                <h2 className="prod-ov-view__head head_level-2">
                  {product.name}
                </h2>
                <p className="prod-ov-view__body paragraph">
                  {product.description}
                </p>
                <p className="prod-ov-view__price price">
                  $ {product.price}
                </p>
              </div>

              <div className="prod-ov-view__btn-container btn-container">
                <div className="prod-ov-view__count">
                  <Counter />
                </div>
                <div className="prod-ov-view__cart">
                  <AddCart/>
                </div>
              </div>

            </div>
          </div>
        </div>
    )
}
