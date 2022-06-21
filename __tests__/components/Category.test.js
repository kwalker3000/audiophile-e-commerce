
import React from 'react';
import { AppContext, useAppContext, AppWrapper } from 
'../../src/context/appContext';
import { Category } from '../../src/components/Category';

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Image from 'next/image';
import mockImg from '../../public/assets/favicon-32x32.png';


describe('update attribute based on hover status', () => {

    afterEach(cleanup);

    it('on hover', async () => {
	const user = userEvent.setup();
	let {container} = render(<Category src={mockImg} />);
	
	await user.hover(screen.getByRole('link'));
	let activeArrow = container.getElementsByClassName('arrow_active');

	expect(activeArrow[0]).toBeInTheDocument();

    })

    it('on unhover', async () => {
	const user = userEvent.setup();
	let {container} = render(<Category src={mockImg} />);

        // test complained about coverage with unhover event only 
	await user.hover(screen.getByRole('link'));
	await user.unhover(screen.getByRole('link'));

	let activeArrow = container.getElementsByClassName('arrow_active');

	expect(activeArrow[0]).toBeUndefined();

    })
})


describe('<Category/>', () => {

    let text = 'shop';
    afterEach(cleanup);
    
    it('should mount', () => {
	render(<Category src={mockImg} />);

	let value = screen.getByText(text);
	expect(value).toBeInTheDocument();
    })
    
    it('should unmount', async () => {
        let state = {
            isMenuOpen: true,
            toggleMenu() {
                this.isMenuOpen = false;
            }
        };
	const user = userEvent.setup();
	render
        (
            <Category src={mockImg}/>
        );

	let mountedValue = screen.getByText(text);
	await user.click(screen.queryByRole('link', {
	    name: 'earphones'
	}));
	let unmountedValue = screen.findByText(text).length;

	expect(mountedValue).toBeInTheDocument()
        expect(unmountedValue).toBeUndefined;
    })

})
