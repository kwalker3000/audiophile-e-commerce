import React from 'react'
import Image from 'next/image'

import { Img } from './Img'

import modelWithHeadsMob from '../../public/assets/shared/mobile/image-best-gear.jpg'
import modelWithHeadsTab from '../../public/assets/shared/tablet/image-best-gear.jpg'
import modelWithHeadsDes from '../../public/assets/shared/desktop/image-best-gear.jpg'

export const About = () => {
  let img
  return (
    <div id="about">
      <div className="about">
        <div className="about__img">
          <Img
            remote={false}
            mobImg={modelWithHeadsMob}
            tabImg={modelWithHeadsTab}
            desImg={modelWithHeadsDes}
            defaultImg={modelWithHeadsTab}
            descr="close-up photo of male model wearing headphones"
          />
        </div>

        <div className="about__text">
          <h2 className="about__head head_level-2">
            bringing you the
            <span className="hghlt"> best </span>
            audio gear
          </h2>
          <p className="about__body paragraph">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  )
}
