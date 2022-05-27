import React from "react"
import Link from "next/link"
import Image from "next/image"

import headphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"

import arrow from "../../public/assets/shared/desktop/icon-arrow-right.svg"

export const Category = ({name, src, className}) => {
    const [isActive, setIsActive] = React.useState(false)
  return (
      <Link href={`/${name}`}>
        <a
          className={`link ${className}`}
          onMouseEnter={() => setIsActive(!isActive)}
          onMouseLeave={() => setIsActive(!isActive)}
        >
          <div className="category__content">
            <div className="img-wrapper_category">
              <Image
                src={src}
                alt={name}
                layout="responsive"
              />
            </div>
            <p className="category__title title">{name}</p>
            <div
              className='wrapper_p'>
	      <p className="category__sub-title sub-title op">Shop</p>
              <div
                className={`${isActive ? 'arrow_active' : '' } img-wrapper_arrow`}>
	        <Image src={arrow} alt="" />
	      </div>
	    </div>
          </div>
        </a>
      </Link>
  )
}
