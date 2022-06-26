import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Headline } from '../../src/components/Headline'

describe('Headline', () => {
  it('renders Headline component', () => {
    render(<Headline title="title" />)

    const element = screen.getByText('title')

    expect(element).toBeInTheDocument()
  })
})
