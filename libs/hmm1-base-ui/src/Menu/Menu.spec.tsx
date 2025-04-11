import {render, screen} from '@testing-library/react';

import {Menu} from './Menu';

describe(Menu, () => {
  it('renders', async () => {
    render(<Menu label="My Menu" />);

    expect(screen.getByRole('menu', {name: /my menu/i})).toBeInTheDocument();
  });
});
