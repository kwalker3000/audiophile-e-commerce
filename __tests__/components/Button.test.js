
import React from 'react';
import { Button } from '../../src/components/Button';

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

test('should update styling of component based on hover status',
     async () => {

	 const user = userEvent.setup()
	 let component = render
         (
             <Button
               clr="#000"
               clrhvr="#FFF"
               bk="#FFF"
               bkhvr="#000"/>)

         await user.hover(screen.getByRole('button'))
         let val1 = screen.queryByText('see product').style.backgroundColor;

         await user.unhover(screen.getByRole('button'))
         let val2 = screen.queryByText('see product').style.backgroundColor;

         expect(val1).not.toEqual(val2)
     })

describe('Button', () => {

    afterEach(cleanup);

    it('renders button text through prop', () => {
        let input = 'hello world';
        render(<Button
                 bk="#FFF"
                 bkhvr="#000"
                 clr="#000"
                 clrhvr="#FFF"
                 txt={input} />)

	let btnTxt = screen.getByRole('button').textContent;

	expect(btnTxt).toEqual(input)
    })

    it('renders default button text', () => {
        let defaultTxt = 'see product';
        render(<Button
                 bk="#FFF"
                 bkhvr="#000"
                 clr="#000"
                 clrhvr="#FFF" />)

        let btnTxt = screen.getByRole('button').textContent;

        expect(btnTxt).toEqual(defaultTxt)
    })
})
