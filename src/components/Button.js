
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Button = (
    {
        bk,
        bkhvr,
        clr,
        clrhvr,
        txt
    }) => {
    const [isHover, setIsHover] = useState(false)
    let background = isHover ? bkhvr : bk;
    let color = isHover ? clrhvr : clr;
    return (
        <button
          style={{backgroundColor: background, color: color}}
          className="btn btn-text"
          onMouseEnter={() => setIsHover(!isHover)}
          onMouseLeave={() => setIsHover(!isHover)}>
          {txt ? txt : "see product"}
        </button>
    )
}

Button.propTypes = {
    bk: PropTypes.string.isRequired,
    bkhvr: PropTypes.string.isRequired,
    clr: PropTypes.string.isRequired,
    clrhvr: PropTypes.string.isRequired
}
