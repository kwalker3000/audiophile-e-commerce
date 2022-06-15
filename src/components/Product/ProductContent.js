
import React from 'react';

export const ProductContent = ({features, includes}) => {

    let paragraph = features.split('\n')

    return (
        <div id="prod-content">
          <div className="prod-content">
            <div className="prod-content__feat-wrapper feat-wrapper">
	      <h3
                className="prod-content__head head_level-3">features</h3>
		<p className="prod-content__body paragraph">
		    {paragraph[0]}
		</p>
		<p className="paragraph">
		    {paragraph[2]}
		</p>
	    </div>
	      <div className="prod-content__in-box-wrapper in-box-wrapper">
		<h3
                  className="prod-content__head head_level-3">
                  in the box
                </h3>
                <div className="prod-content__list">
                {includes.map((item, index) => (
                    <p
                      key={index}
                      className="prod-content__body">
                      <span
                        className="quantity">
                        {item.quantity}x
                      </span>
                      <span className="paragraph">{item.item}</span>
                    </p>
                ))}
		</div>
	    </div> 
          </div>
        </div>
    )
}
