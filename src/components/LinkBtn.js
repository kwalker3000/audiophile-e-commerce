
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const LinkBtn = ({path}) => {

    return (
        <Link href={path}>
	  <a
            className="link btn btn_active btn-text"
            type='button'>see product
	    </a>
	</Link>
    )
}

LinkBtn.propTypes = {
    path: PropTypes.string.isRequired
};
