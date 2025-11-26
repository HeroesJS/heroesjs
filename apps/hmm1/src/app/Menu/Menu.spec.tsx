import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Menu } from './Menu';

describe(Menu, () => {
  it('should render', () => {
    render(<Menu label="Menu" />);

    expect(screen.getByRole('menu', { name: /menu/i })).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Menu label="Menu">CHILDREN</Menu>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
