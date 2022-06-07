
import React from 'react';
import { AppWrapper, AppContext } from '../../src/context/appContext';
import { Overlay } from '../../src/components/Overlay';

import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';


describe("<Overlay />", () => {
    let state = {
        isMenuOpen: false
    };

    afterEach(cleanup)

    beforeEach(() => {
	render
        (
            <AppContext.Provider value={state}>
              <Overlay />
            </AppContext.Provider>
        )
    })

    it("updates the display attribute to 'none'", () => {

        let overlay = screen.getByTestId('overlay');
	expect(overlay).toHaveStyle('display: none');

    state.isMenuOpen = true;
    })


    it("updates the display attribute to 'block'", () => {

        let overlay = screen.getByTestId('overlay');
        expect(overlay).toHaveStyle('display: block');
    })
})
