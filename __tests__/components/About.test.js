

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { About } from '../../src/components/About';

describe('About', () => {
  it('renders About component', () => {
    render(<About />)

    const p = screen.getByText('Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.')

    expect(p).toBeInTheDocument()
  })
})
