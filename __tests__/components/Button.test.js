
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
