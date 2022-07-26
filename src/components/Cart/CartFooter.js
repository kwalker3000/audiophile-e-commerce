import React from 'react'
import { useSession } from 'next-auth/react'

import { UpdateCart } from './UpdateCart'
import { Img } from '../Img'
import { logIn } from '../../../pages/index'

import githubIcon from '../../../public/assets/shared/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png'

export const CartFooter = ({
  invoice,
  orderSize,
  updateCart,
  handleDropDown,
  renderCart,
  isUpdateCart,
  isCheckout,
  checkoutCart,
    isEmpty,
}) => {


    let { data } = useSession();

  return (
    <>
      {isUpdateCart ? (
        <UpdateCart
          orderSize={orderSize}
          updateCart={updateCart}
          handleDropDown={handleDropDown}
          renderCart={renderCart}
        />
      ) : (
        <div className="dropdown__tail tail-wrapper">
          <p className="paragraph">Total</p>
          <p className="head_level-3">
            $ {invoice.cart.toLocaleString('en-US')}
          </p>
          <button
            className="btn btn-text btn-dark btn-dark_active"
            onClick={checkoutCart}
            disabled={isEmpty}
          >
            {(data && data.user) ? "checkout" : "checkout as guest"}
          </button>
          {!data && <button
            className="btn btn-text btn-contrast btn-contrast_active"
            onClick={() => logIn()}
            style={
                {
                    border: 'none',
                    marginTop: '1.5rem',
                    display: `${(data && data.user) ? 'block' : 'flex'}`,
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
          >
            <span
              style={
                  {
                      marginRight: `${(data && data.user) ? 0 : '0.5rem'}`,
                      position: 'relative',
                      width: '22px',
                      height: '22px'
                  }
              }>
              {(!data) && <Img
                defaultImg={githubIcon}
                descr="github icon"/>}
            </span> {(data && data.user) ? "checkout as guest" : "checkout with github"}
          </button>}

        </div>
      )}
    </>
  )
}
