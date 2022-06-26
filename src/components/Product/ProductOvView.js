
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../../src/context/appContext';

import { Img } from '../Img';
import { AddCart } from '../AddCart';
import { Counter } from '../Counter';


export const ProductOvView = ({product}) => {
    const [orderSize, setOrderSize] = useState(1);

    let { addCart, stockWarn, resetWarn } = useAppContext();

    useEffect(() => {
        resetWarn();
    }, [])

    let updateOrderSize = action => {
        switch (action) {
        case 'increase': {
            setOrderSize(preSize => preSize + 1);
            break;
        }
        case 'decrease': {
            setOrderSize(preSize => preSize - 1);
            break;
        }
        case 'reset': {
            setOrderSize(1);
            break;
        }
        }
    }

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

               {product.stock > 0 && !stockWarn
                 ? <div className="prod-ov-view__btn-container btn-container">
		     <div className="prod-ov-view__count counter-wrapper">
                       <Counter
                         stock={product.stock}
                         updateOrderSize={updateOrderSize}
                         orderSize={orderSize}
                className={{counter: "counter", count: "count"}}/>
                     </div>
                     <div className="prod-ov-view__cart">
                       <AddCart
                         addCart={addCart}
                         product={product}
                         size={orderSize}
                         updateOrderSize={updateOrderSize}/>
                     </div>
                   </div>
                 : <div className="out-of-stock">
                     {stockWarn
                      ? <p>We're sorry, but your order is over the allowable limit, please contact support for assistance. Thank you.</p>
                      : <p>We're sorry, the item is currently out of stock.
                     </p>}
                   </div>
               }

            </div>
          </div>
        </div>
    )
}
