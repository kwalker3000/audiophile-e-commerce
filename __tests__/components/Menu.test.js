import { render, screen } from '@testing-library/react'
import { Menu } from '../../src/components/Menu/Menu'
import '@testing-library/jest-dom'

test('renders a <Menu', () => {
  let txt = 'earphones'
  render(<Menu />)

  const object = screen.getByAltText(txt)

  expect(object).toBeInTheDocument()
})
