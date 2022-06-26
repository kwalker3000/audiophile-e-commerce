
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Counter } from '../../src/components/Counter';

describe('Counter', () => {
  it('renders Counter component', () => {
      render(<Counter />);

      const txt = screen.getByText('+');

      expect(txt).toBeInTheDocument();
  })
})

describe('.updateOrderSize', () => {

    let props = {
        stock: 25,
        orderSize: 1,
        updateOrderSize: function(action) {
            switch (action) {
            case 'increase':
                props.orderSize++;
                break;
            case 'decrease':
                props.orderSize--;
                break;
            }
        }
        
    }

    afterEach(cleanup);

    it('increases orderSize', async () => {
	const user = userEvent.setup();

	let {unmount} = render(<Counter {...props}/>);
	let atRenderValue = '1';
	let comp = screen.getByText(atRenderValue).textContent;

	expect(comp).toEqual(atRenderValue)

	await user.click(screen.getByRole('button', {
	    name: 'increase order size'
	}))
        unmount()

	render(<Counter {...props}/>);
	let afterIncreaseValue = '2';
	comp = screen.getByText(afterIncreaseValue).textContent;

	expect(comp).toEqual(afterIncreaseValue)
    })

    it('decreases orderSize', async () => {
    	const user = userEvent.setup();
        const currentSize = props.orderSize;

    	let {unmount} = render(<Counter {...props}/>);

    	await user.click(screen.getByRole('button', {
    	    name: 'decrease order size'
    	}));
        unmount()

    	render(<Counter {...props}/>);
    	let afterDecreaseValue = currentSize - 1
    	let comp = screen.getByText(afterDecreaseValue).textContent;

    	expect(Number(comp)).toEqual(currentSize - 1);
    })

})
