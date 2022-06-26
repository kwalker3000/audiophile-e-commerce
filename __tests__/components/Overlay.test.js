
import React from 'react';
import { Overlay } from '../../src/components/Overlay';

import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';


describe("<Overlay />", () => {

    let isMenuOpen = false;

    afterEach(cleanup)

    beforeEach(() => {
	render (<Overlay isMenuOpen={isMenuOpen} />)
    })

    it("updates the display attribute to 'none'", () => {

        let overlay = screen.getByTestId('overlay');
	expect(overlay).toHaveStyle('display: none');

	isMenuOpen = true;
    })


    it("updates the display attribute to 'block'", () => {

        let overlay = screen.getByTestId('overlay');
        expect(overlay).toHaveStyle('display: block');
    })
})
