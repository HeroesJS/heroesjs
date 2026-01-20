import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Menu } from './Menu';

describe(Menu, () => {
  it('should render', () => {
    renderWithProviders(<Menu label="Menu" />);

    expect(screen.getByRole('menu', { name: /menu/i })).toBeInTheDocument();
  });

  it('should render children', () => {
    renderWithProviders(<Menu label="Menu">CHILDREN</Menu>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
