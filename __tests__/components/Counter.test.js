
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Counter } from '../../src/components/Counter';

describe('Counter', () => {
  it('renders Counter component', () => {
      render(<Counter />);

      const txt = screen.getByText('1');

      expect(txt).toBeInTheDocument();
  })
})

describe('order size', () => {

    afterEach(cleanup);

    it('increases order size', async () => {
	const user = userEvent.setup();
	render(<Counter />);

	let atRenderValue = '1';
	let comp = screen.getByText(atRenderValue).textContent;

	expect(comp).toEqual(atRenderValue)
	await user.click(screen.getByRole('button', {
	    name: 'increase order size'
	}))
	let afterIncreaseValue = '2';
	comp = screen.getByText(afterIncreaseValue).textContent;

	expect(comp).toEqual(afterIncreaseValue)
    })

    it('decreases order size', async () => {
	const user = userEvent.setup();
	render(<Counter />);

	await user.click(screen.getByRole('button', {
	    name: 'increase order size'
	}));
	let afterIncreaseValue = '2';
	let comp = screen.getByText(afterIncreaseValue).textContent;

	expect(comp).toEqual(afterIncreaseValue);

	await user.click(screen.getByRole('button', {
	    name: 'decrease order size'
	}));
	let afterDecreaseValue = '1';
	comp = screen.getByText(afterDecreaseValue).textContent;

	expect(comp).toEqual(afterDecreaseValue);
    })

})
