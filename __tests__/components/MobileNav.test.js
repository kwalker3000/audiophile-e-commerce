
import React from 'react';
import { AppContext } from '../../src/context/appContext';
import { MobileNav } from '../../src/components/MobileNav';

import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// test("<MobileNav /> renders <Menu /> when button is clicked", async () => {
//     let state = {
//         isMenuOpen: false
//     };

//     const user = userEvent.setup();
//     render
//     (
// 	<AppContext.Provider value={state} >
//         <MobileNav />
//       </AppContext.Provider>
//     );


//     await user.click(screen.getByRole('button', {name: 'open main menu'}));
//     let menu = screen.queryByText('headphones');
    
//     expect(menu).not.toBeInTheDocument();

//     await user.click(screen.getByRole('button', {name: 'close main menu'}));
//     menu = screen.queryByText('headphones');
//     expect(menu).not.toBeInTheDocument();


// });

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

	//render(<MobileNav isMenuOpen={true}/>);

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
