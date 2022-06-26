
import React from 'react';
import { AppContext } from '../../src/context/appContext';
import { MobileNav } from '../../src/components/MobileNav';

import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('renders child components', () => {

    let state = {
        isMenuOpen: true
    };

    afterEach(cleanup);

    it('renders <Burger and <Menu', () => {
	
	render
	(
	    <AppContext.Provider value={state} >
		<MobileNav />
	    </AppContext.Provider>
	);


	let burger = screen.getByAltText('burger icon');
	let menu = screen.getByText('headphones');

	expect(burger).toBeInTheDocument();
	expect(menu).toBeInTheDocument();
	
    })

    it('renders <Burger and not <Menu', () => {
	state.isMenuOpen = false;
	
	render
	(
	    <AppContext.Provider value={state} >
		<MobileNav />
	    </AppContext.Provider>
	);

	let burger = screen.getByAltText('burger icon');
	let menu = screen.queryByText('headphones');

	expect(burger).toBeInTheDocument();
	expect(menu).toBeNull();

    })
})
