
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from '../../src/components/Footer';

describe('Footer', () => {
  it('renders Footer component', () => {
      render(<Footer />);

      const txt = screen.getByText('Copyright 2021. All Rights Reserved');

      expect(txt).toBeInTheDocument();
  })
})
