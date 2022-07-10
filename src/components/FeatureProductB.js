import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Img } from './Img'
import { LinkBtn } from './LinkBtn'

import zx7M from '../../public/assets/home/mobile/image-speaker-zx7.jpg'
import zx7T from '../../public/assets/home/tablet/image-speaker-zx7.jpg'
import zx7D from '../../public/assets/home/desktop/image-speaker-zx7.jpg'

export const FeatureProductB = () => {
  return (
    <div id="ft-prod-b">
      <div className="ft-prod-b">
        <div className="ft-prod-b__img img-wrapper_prod-b">
          <Img
            mobImg={zx7M}
            tabImg={zx7T}
            desImg={zx7D}
            defaultImg={zx7T}
            descr="black and white photo of the zx7 speaker model placed on a desk"
          />
        </div>
        <div className="ft-prod-b__content content-wrapper">
          <h2 className="ft-prod-b__head head_level-2">zx7 speaker</h2>
          <div className="ft-prod-b__btn">
            <LinkBtn path="/speakers/zx7-speaker" theme="inverse" />
          </div>
        </div>
      </div>
    </div>
  )
}
