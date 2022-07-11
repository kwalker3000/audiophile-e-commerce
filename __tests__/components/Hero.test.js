import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Hero } from '../../src/components/Home/Hero'

describe('Hero', () => {
  it('renders Hero component', () => {
    render(<Hero />)

    const element = screen.getByText(
      'Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.'
    )

    expect(element).toBeInTheDocument()
  })
})
