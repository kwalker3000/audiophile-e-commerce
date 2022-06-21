
import React, { useEffect } from 'react';
import Link from 'next/link';

import { Img } from './Img';
import { Button } from './Button';

export const ProductQkView = ({data}) => {

    const { category, slug } = data;
       return (
        data.map(product => (
	    <div id="prod-qk-view"
                 key={product._id}>
	    <div className="prod-qk-view">

		<div className="prod-qk-view__img img-wrapper">
		<Img
		    remote={true}
		    mobImg={product.categoryImage.mobile}
		    tabImg={product.categoryImage.tablet}
		    desImg={product.categoryImage.desktop}
		    defaultImg={product.categoryImage.tablet}
		  descr={product.name}/>
		</div>

		<div className="prod-qk-view__content content-wrapper">
		<div className="prod-qk-view__text text-wrapper">
		  {product.new
                   ? <p className="prod-qk-view__overline overline">
		    new product
		     </p>
                   : <></>}
		    <h2 className="prod-qk-view__head head_level-2">
		      {product.name}
		    </h2>
		    <p className="prod-qk-view__body paragraph">
		      {product.description}
		    </p>
		</div>

                  <Link href={`/${product.category}/${product.slug}`} >
		    <a className="prod-qk-view__btn link">
			<Button
			bk="#D87D4A"
			bkhvr="#FBAF85"
			clr="#FFF"
			clrhvr="#FFF"/>
		    </a>
                  </Link>
		</div>

	    </div>
	    </div>
        ))
	)
}