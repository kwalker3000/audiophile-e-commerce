
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { AddCart } from '../../src/components/AddCart';

describe('AddCart', () => {
  it('renders AddCart component', () => {
      render(<AddCart />);

      const element = screen.getByText('add to cart');

      expect(element).toBeInTheDocument();
  })
})

