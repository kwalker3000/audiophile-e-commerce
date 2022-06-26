import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FeatureProductC } from '../../src/components/FeatureProductC'

describe('FeatureProductC', () => {
  it('renders FeatureProductC component', () => {
    render(<FeatureProductC />)

    const element = screen.getByText('yx1 earphones')

    expect(element).toBeInTheDocument()
  })
})
