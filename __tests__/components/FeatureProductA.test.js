import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FeatureProductA } from '../../src/components/Home/FeatureProductA'

describe('FeatureProductA', () => {
  it('renders FeatureProductA component', () => {
    render(<FeatureProductA />)

    const element = screen.getByText('zx9 speaker')

    expect(element).toBeInTheDocument()
  })
})
