
import React from 'react';
import { AppWrapper, AppContext } from '../../src/context/appContext';
import { MobileNav } from '../../src/components/MobileNav';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test("<MobileNav /> renders <Menu /> when button is clicked", async () => {
    // let state = {
    //     isMenuOpen: false
    // }

    render
    (
      <AppWrapper value="" >
        <MobileNav />
      </AppWrapper>
    );

    const user = userEvent.setup()

    await user.click(screen.getByRole('button', {name: 'open main menu'}))
    let menu = screen.queryByText('headphones')
    expect(menu).toBeInTheDocument()

    await user.click(screen.getByRole('button', {name: 'close main menu'}))
    menu = screen.queryByText('headphones')
    expect(menu).not.toBeInTheDocument()


});
