
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from '../../src/components/Logo';

describe('Logo', () => {
  it('renders Logo component', () => {
      render(<Logo />);

      const element = screen.getByAltText('audiophile');

      expect(element).toBeInTheDocument();
  })
})
