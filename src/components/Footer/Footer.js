import React from 'react'

import { PrimaryNav } from '../PrimaryNav'
import { Logo } from '../Logo'
import { Social } from './Social'

export const Footer = () => {
  return (
    <div className={`footer`}>
      <div className="outline-x"></div>

      <div className="footer__head">
        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__nav">
          <PrimaryNav />
        </div>
      </div>

      <div className="footer__body">
        <p className="footer__text p">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
      </div>

      <div className="footer__tail">
        <div className="footer__copyright">
          <p className="footer__text p">Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="footer__social">
          <Social />
        </div>
      </div>
    </div>
  )
}
