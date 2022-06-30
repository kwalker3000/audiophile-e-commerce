import React from 'react'
import Link from 'next/link'

import { Img } from './Img'
import { LinkBtn } from './LinkBtn'

export const Recommend = ({ recommend }) => {
  let getCategory = (product) => {
    let strArray = product.slug.split('-')
    let len = strArray.length
    let isPlural = product.slug[product.slug.length - 1] == 's'
    return strArray[len - 1] + (isPlural ? '' : 's')
  }

  let getKey = (product) => {
    let url = product.image.mobile
    let id = url.slice(url.length - 10, url.length - 4)
    return id
  }

  return (
    <div id="recommend">
      <div className="recommend">
        <h2 className="recommend__head head_level-2">you may also like</h2>

        <div className="recommend__body">
          {recommend.map((prod, i) => (
            <div className="recommend__product" key={i}>
              <div className="recommend__img img-wrapper">
                <Img
                  key={getKey(prod)}
                  remote={true}
                  mobImg={prod.image.mobile}
                  tabImg={prod.image.tablet}
                  desImg={prod.image.desktop}
                  defaultImg={prod.image.tablet}
                  descr={prod.name}
                />
              </div>
              <h3 className="recommend__subtitle head_level-3">{prod.name}</h3>
              <div className="recommend__btn">
                <LinkBtn
                  path={`/${getCategory(prod)}/${prod.slug}`}
                  theme="dark"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
