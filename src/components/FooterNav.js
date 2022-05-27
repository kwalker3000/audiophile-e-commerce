
import React from 'react'
import Link from 'next/link'

export const FooterNav = ({className}) => {
    let pages = [       
        {
            id: 0,
            name: 'home',
            address: '/'
        },
        
        {
            id: 1,
            name: 'headphones',
            address: '/headphones'
        },

        {
            id: 2,
            name: 'speakers',
            address: '/speakers'
        },

        {
            id: 3,
            name: 'earphones',
            address: '/earphones'
        }
    ]
    
    let links = pages.map(page => (
        <li
          className=
            {
                `${page.name == 'earphones' ? 'margin-reset' : ''} footer-nav__item`
            }
        >
          <Link href={page.address}>
          <a className={'link-text link link_active'}>
            {page.name}
          </a>
          </Link>
        </li>  
    ))

    return (
        <nav
          className={`${className} footer-nav`}>
          <ul
            className={'footer-nav__list'}
          >
            {links}
          </ul>
        </nav>
    )
}
