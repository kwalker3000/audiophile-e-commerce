
import React from 'react'
import Link from 'next/link'

export const Navbar = ({className}) => {
    let pages = [       
        {
            name: 'home',
            address: '/'
        },
        
        {
            name: 'headphones',
            address: '/headphones'
        },

        {
            name: 'speakers',
            address: '/speakers'
        },

        {
            name: 'earphones',
            address: '/earphones'
        }
    ]
    
    let links = pages.map(page => (
        <li
          className={
              `${page.name == 'earphones' ? 'margin-reset' : ''} nav__item`
          }>
          <Link href={page.address}>
          <a
            className={'nav__link link-text link link_active'}
          >
            {page.name}
          </a>
          </Link>
        </li>  
    ))

    return (
        <nav
          className={`${className} nav`}>
          <ul
            className={'nav__list'}
          >
            {links}
          </ul>
        </nav>
    )
}
