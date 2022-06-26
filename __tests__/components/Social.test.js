import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Social } from '../../src/components/Social'

describe('Social', () => {
  it('renders Social component', () => {
    let { container } = render(<Social />)

    const element = container.getElementsByClassName('link_twitter')

    expect(element[0]).toBeInTheDocument()
  })
})
