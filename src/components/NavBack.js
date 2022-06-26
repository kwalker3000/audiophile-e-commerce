import React from 'react'
import { useRouter } from 'next/router'

export const NavBack = () => {
  const router = useRouter()

  let navigateBack = () => router.back()

  return (
    <div className="nav-back">
      <button
        className="nav-back__btn btn_back btn btn-text btn_reset"
        onClick={navigateBack}
      >
        Go Back
      </button>
    </div>
  )
}
