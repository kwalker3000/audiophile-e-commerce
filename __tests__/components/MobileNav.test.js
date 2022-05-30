
import React from 'react';
import { MobileNav } from '../../src/components/MobileNav';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('Should menu component', async () => {
    const user = userEvent.setup()
    render(<MobileNav />)

    await user.click(screen.getByRole('button', {name: 'open main menu'}))
    let menu = screen.queryByText('headphones')
    expect(menu).toBeInTheDocument()

    await user.click(screen.getByRole('button', {name: 'close main menu'}))
    menu = screen.queryByText('headphones')
    expect(menu).not.toBeInTheDocument()

})
