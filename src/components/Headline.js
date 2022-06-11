
import React from 'react';
import PropTypes from 'prop-types';


export const Headline = ({title}) => {

    return (
        <div id="headline">
          <div className="headline">
            <h1 className="headline__head head_level-1">
              {title}
            </h1>
          </div>
        </div>
    )
}

Headline.propTypes = {
    title: PropTypes.string.isRequired
}




