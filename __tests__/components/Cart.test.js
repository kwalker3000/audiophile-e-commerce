
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Cart } from '../../src/components/Cart';

describe('Cart', () => {
  it('renders Cart component', () => {
      render(<Cart />);

      const cart = screen.getByAltText('cart icon');

      expect(cart).toBeInTheDocument();
  })
})
