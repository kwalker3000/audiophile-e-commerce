import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Counter } from '../../src/components/Cart/Counter'

describe('Counter', () => {
  it('renders Counter component', () => {
    render(<Counter className={{ counter: 'counter', count: 'count' }} />)

    const txt = screen.getByText('+')

    expect(txt).toBeInTheDocument()
  })
})
