
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import placeholderImg from '../../public/vercel.svg';

export const Img = ({mobImg, tabImg, desImg, descr, defaultImg}) => {
    const [imageSrc, setImageSrc] = useState(placeholderImg);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1149) {
                setImageSrc(prevImg => desImg || defaultImg);
            }
            else if (window.innerWidth < 1149
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
	  layout="responsive"/>
    )
}


            Img.propTypes = {
                defaultImg: PropTypes.object.isRequired,
                descr: PropTypes.string.isRequired,
                mobImg: PropTypes.object,
                tabImg: PropTypes.object,
                desImg: PropTypes.object
            }
