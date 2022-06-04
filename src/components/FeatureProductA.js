
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from './Button';
import { Img } from './Img'

import zx9M from '../../public/assets/home/mobile/image-speaker-zx9.png';
import zx9T from '../../public/assets/home/tablet/image-speaker-zx9.png';
import zx9D from '../../public/assets/home/desktop/image-speaker-zx9.png';
import pattern from '../../public/assets/home/desktop/pattern-circles.svg';

export const FeatureProductA = () => {
    return (
        <div id="ft-prod-a">
        <div className="ft-prod-a">
          <div className="bkg-img">
            <Image
              src={pattern}
              alt=""
              layout="responsive"/>
          </div>
          <div className="ft-prod-a__img img-wrapper_prod-a">
            <Img
              mobImg={zx9M}
              tabImg={zx9T}
              desImg={zx9D}
              defaultImg={zx9T}
              descr="zx9 speaker model"/>
          </div>
          <div className="ft-prod-a__content content-wrapper">
            <h2 className="ft-prod-a__head head_level-2">
              zx9 speaker
            </h2>
            <p className="ft-prod-a__body paragraph">
              Upgrade to premium speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>
	    <div className="ft-prod-a__btn">
		<Button
		    bk="#000"
		    bkhvr="#4C4C4C"
		    clr="#FFF"
		    clrhvr="#FFF"/>            
	    </div>

          </div>
	</div>
	</div>
    )
}
