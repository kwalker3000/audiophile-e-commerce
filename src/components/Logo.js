import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/assets/shared/desktop/logo.svg'

export const Logo = ({className}) => {
  return (
    <Link href="/">
      <a className={`${className} logo`}>
          <Image
            src={logo}
            alt="audiophile"
            width={145}
          />
      </a>
    </Link>
  )
}
