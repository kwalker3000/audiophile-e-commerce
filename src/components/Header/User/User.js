
import React, { useState } from 'react';
import Link from 'next/link'

import { UserAvatar } from './UserAvatar';
import { logIn, logOut } from '../../../../pages/index'

export const User = ({ user, isAccountOpen, toggleAccount }) => {

    const [isLogIn, setIsLogIn] = useState(user.id || false)

    let handleUserRequest = user => {
        if (user.id) {
            logOut();
        }
        else {
            logIn();
        }
    }

    return (
        <div id="user">
          <div className="user">
            <button
              className='btn_reset user__icon icon-wrapper'
              onClick={toggleAccount}
            >
              <span className={`${user.id ? 'avatar' : 'user-icon'}`}>
		<UserAvatar user={user}/>
	      </span>
            </button>
	  </div>
            { isAccountOpen &&
             <div className="account__dropdown dropdown">
              <div className="dropdown__list list">
                <div className="dropdown__item item">
                  {user.id && <Link href="/orders">
                    <a className="link orders">
                      Orders
                    </a>
                  </Link>}
                </div>
                <div className="dropdown__item item">
                  <button
                    className="btn_reset"
                    onClick={() => handleUserRequest(user)}
                  >
                    <span
                      className='btn-text btn_user'
                      style={
                          {
                              marginTop: `${user.id ? '1rem' : 0}`
                          }}
                    >
                      {isLogIn ? "Sign Out" : "Sign In"}
                    </span>
                  </button>
                </div>
              </div>
             </div>
            }
        </div>
    )
}
