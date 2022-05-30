
import React from 'react';
import { Category } from '../../src/components/Category';

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Image from 'next/image'
import mockImg from '../../public/assets/favicon-32x32.png'

// describe('updates class attribute', () => {


//     it('should add className on mouse enter', async () => {
//     const user = userEvent.setup()
//     let {container} = render(<Category src={mockImg} />)

// 	await user.hover(screen.getByRole('link'))
// 	let activeArrow = container.getElementsByClassName('arrow_active');

// 	expect(activeArrow[0]).toBeInTheDocument()

//     })

//     it('should remove className on mouse leave', async () => {
// 	await user.unhover(screen.getByRole('link'))
// 	activeArrow = container.getElementsByClassName('arrow_active');

// 	expect(activeArrow[0]).toBeUndefined()

//     })
// })    

test('should update class attribute based on hover status', async () => {

    const user = userEvent.setup()
    let {container} = render(<Category src={mockImg} />)

    // mouse enter
    await user.hover(screen.getByRole('link'))
    let activeArrow = container.getElementsByClassName('arrow_active');

    expect(activeArrow[0]).toBeInTheDocument()

    // mouse leave
    await user.unhover(screen.getByRole('link'))
    activeArrow = container.getElementsByClassName('arrow_active');

    expect(activeArrow[0]).toBeUndefined()

})

