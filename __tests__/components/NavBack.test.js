import Router from 'next/router'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { NavBack } from '../../src/components/NavBack'

jest.mock('next/router')

describe('NavBack', () => {
  afterEach(cleanup)

  it('renders NavBack component', () => {
    render(<NavBack />)

    const element = screen.getByText('Go Back')

    expect(element).toBeInTheDocument()
  })
})

test('browser back navigation on click', async () => {
  let routerSpy = jest.spyOn(Router, 'back')
  let navigateBack = () => Router.back()

  navigateBack()
  expect(routerSpy).toBeCalled()
})
