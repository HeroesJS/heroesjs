import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Backdrop } from './Backdrop';

describe(Backdrop, () => {
  it('should render children', () => {
    renderWithProviders(<Backdrop>CHILDREN</Backdrop>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
