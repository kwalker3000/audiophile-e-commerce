import React from 'react'
import {
  AppContext,
  useAppContext,
  AppWrapper,
} from '../../src/context/appContext'
import { Category } from '../../src/components/Category'

import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Image from 'next/image'
import mockImg from '../../public/assets/favicon-32x32.png'
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
)

describe('<Category/>', () => {
  afterEach(cleanup)

  describe('onClick -> .closeComponent -> .toggleMenu', () => {
    it('toggles isMenuOpen state to false', async () => {
      const user = userEvent.setup()
      //const push =jest.fn()

      render(
        <Category
          src={mockImg}
          isRenderedByNav={true}
          toggleMenu={() => false}
          name="headphones"
        />
      )

      let element = screen.getByText('shop')

      expect(element).toBeInTheDocument()

      await user.click(screen.getByTestId('category-link'))

      let unmountedValue = screen.findByText('shop').length

      expect(unmountedValue).toBeUndefined
    })

    it('it does not trigger toggleMenu', async () => {
      const user = userEvent.setup()
      render(
        <Category
          src={mockImg}
          isRenderedByNav={false}
          toggleMenu={() => false}
        />
      )

      let element = screen.getByText('shop')

      expect(element).toBeInTheDocument()

      await user.click(screen.getByTestId('category-link'))

      let unmountedValue = screen.queryByText('shop')

      expect(unmountedValue).toBeInTheDocument()
    })
  })
})
