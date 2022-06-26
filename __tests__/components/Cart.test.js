
import { render, screen, cleanup } from '@testing-library/react';
import { AppContext } from '../../src/context/appContext';
import '@testing-library/jest-dom';

import { Cart } from '../../src/components/Cart';

describe('Cart', () => {

    let state = {
        cart: []
    };

    afterEach(cleanup)

  it('renders empty cart icon', () => {
    let {container} = render
        (
            <AppContext.Provider value={state}>
              <Cart />
            </AppContext.Provider>
        );

      const cart = container.getElementsByClassName('cart-status').length;

      expect(cart).toEqual(0);

      // add item to cart
      state.cart = ['item']
  });

  it('renders empty cart icon', () => {
    let {container} = render
        (
            <AppContext.Provider value={state}>
              <Cart />
            </AppContext.Provider>
        );

      const cart = container.getElementsByClassName('cart-status').length;

      expect(cart).toEqual(1);
  });

});
