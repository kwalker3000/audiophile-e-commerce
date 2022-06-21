
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AddCart } from '../../src/components/AddCart';

describe('AddCart', () => {
  it('renders AddCart component', () => {
      render(<AddCart />);

      const btn = screen.getByRole('button');

      expect(btn).toBeInTheDocument();
  })
})
