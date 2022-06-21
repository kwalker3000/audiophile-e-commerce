
import React from 'react';
import { AppContext, useAppContext, AppWrapper } from '../../src/context/appContext';

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';


describe('Provider', () => {
    it('isMenuOpen is false by default', () => {
        render
        (
            <AppWrapper>
		<AppContext.Consumer>
                  {
                      value => <p>menu is open: {value.isMenuOpen.toString()}</p>
                  }
		</AppContext.Consumer>
            </AppWrapper>
        )

        let txt = screen.getByText('menu is open: false');
        expect(txt).toBeTruthy();
    })
})

describe('.toggleMenu', () => {
    it('toggles isMenuOpen boolean state', async () => {
        const user = userEvent.setup();
         render
        (
            <AppWrapper>
		<AppContext.Consumer>
                  {
                      value => (
                          <>
                          <p>menu is open: {value.isMenuOpen.toString()}</p>
                            <button onClick={value.toggleMenu}>Menu</button>
                          </>
                      )
                  }
		</AppContext.Consumer>
            </AppWrapper>
        )
        await user.click(screen.getByRole('button'));

        let isOpen = screen.getByText('menu is open: true');
        expect(isOpen).toBeTruthy();

        await user.click(screen.getByRole('button'));
       
        let isClose = screen.getByText('menu is open: false');
        expect(isClose).toBeTruthy();
    })
})
