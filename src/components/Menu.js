
import React from 'react'
import {Category} from './Category'
import Link from "next/link"
import Image from "next/image"

import headphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"

export const Menu = ({className}) => {
    const [isActive, setIsActive] = React.useState(false)
    const categories = [
	    {
                id: 1,
		name: "headphones",
		src: headphones
	    },

	    {
                id: 2,
		name: "speakers",
		src: speakers
	    },

	    {
		id: 3, 
		name: "earphones",
		src: earphones
	    }
    ]

    


  return (
      <div className={`${className} menu`}>
      {categories.map(category => (
	  <Category
            onMouseEnter={() => console.log('hello')}
            onMouseLeave={() => setIsActive(!isActive)}
            className={`menu__item-${category.id}`}
	    name={category.name}
	    src={category.src}
	    key={category.id}/>
      ))}
    </div>
  )
}
