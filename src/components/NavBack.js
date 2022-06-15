
import React from 'react';
import { useRouter } from 'next/router';

export const NavBack = () => {
    const router = useRouter();

    return (
          <div className="nav-back">
            <button
              className="nav-back__btn btn_back btn btn-text"
              onClick={() => router.back()}>Go Back</button>
          </div>
    )
}
