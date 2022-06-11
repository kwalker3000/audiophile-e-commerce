
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import placeholderImg from '../../public/vercel.svg';

export const Img = (
    {
        mobImg,
        tabImg,
        desImg,
        descr,
        defaultImg,
        remote
    }) => {
        
    let isRemote = remote || false

    const [imageSrc, setImageSrc] = useState(placeholderImg);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1149) {
                setImageSrc(prevImg => desImg || defaultImg);
            }
            else if (window.innerWidth < 1150
                     && window.innerWidth > 684) {
                setImageSrc(prevImg => tabImg || defaultImg);
            }
            else {
                setImageSrc(prevImg => mobImg || defaultImg);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Image
	  src={imageSrc}
	  alt={descr}
          width={isRemote ? '100%' : ""}
          height={isRemote ? '100%' : ""}
            layout={isRemote ? "fill" : "responsive"}/>
    )
}


            Img.propTypes = {
                defaultImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
                descr: PropTypes.string.isRequired,
                mobImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
                tabImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
                desImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
            }
