import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FeatureProductB } from '../../src/components/FeatureProductB'

describe('FeatureProductB', () => {
  it('renders FeatureProductB component', () => {
    render(<FeatureProductB />)

    const element = screen.getByText('zx7 speaker')

    expect(element).toBeInTheDocument()
  })
})
