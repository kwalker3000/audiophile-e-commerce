
import React from 'react';

import { Img } from '../Img'

export const ProductGallery = ({gallery}) => {

    let imgArray = Object.keys(gallery)
    let updatedGallery = []

    for (let key of imgArray) {
	let obj = {}
        let imgs = []

        for (let prop in gallery[key]) {
            let url = gallery[key][prop]
            let id = url.slice(url.length-10, url.length-4)

	    obj["id"] = id 
            imgs.push(url);
        }
        obj["images"] = imgs;
        updatedGallery.push(obj);
    }

    let	galleryMap = updatedGallery.map((img, idx) => (
                <div
                  className={`prod-gallery__img img-wrapper img-${idx+1}`}
                  key={img.id}>
	    	  <Img
	    	    remote={true}
	    	    mobImg={img.images[0]}
	    	    tabImg={img.images[1]}
	    	    desImg={img.images[2]}
	    	    defaultImg={img.images[1]}
	    	  descr={"blueblue"}/>
	    	</div>
            ))
   
    return (
        <div id="prod-gallery">
          <div className="prod-gallery">
            {galleryMap}
          </div>
        </div>
    )
}
