
import { Burger } from '../../src/components/Burger';

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Burger', () => {
  it('renders burger component', () => {
    render(<Burger />)

      const burgerIcon = screen.getByAltText('burger icon');
    expect(burgerIcon).toBeInTheDocument()

  })
})

describe('toggle button role', () => {
    
    let button;

    afterEach((cleanup));

    it('open menu', async () => {
        render(<Burger isMenuOpen={false}/>)

        button = screen.getByRole('button', {name: 'open main menu'});
        expect(button).toBeInTheDocument();
    })

    it('close menu', async () => {
        render(<Burger isMenuOpen={true}/>)

        button = screen.getByRole('button', {name: 'close main menu'});
        expect(button).toBeInTheDocument();
    })

})
