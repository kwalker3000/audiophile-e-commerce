import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const LinkBtn = ({ path, text, theme }) => {
  return (
    <Link href={path}>
	<a className={`link btn btn-${theme} btn-${theme}_active btn-text`}>
        {text ? text : 'see product'}
      </a>
    </Link>
  )
}

LinkBtn.propTypes = {
  path: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}
