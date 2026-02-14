import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { PlayerColorJewel } from './PlayerColorJewel';
import { PlayerColor } from '@heroesjs/hmm1-core';

describe(PlayerColorJewel, () => {
  it('should render as blue by default', () => {
    renderWithProviders(<PlayerColorJewel />);

    expect(screen.getByText(/^blue$/i)).toBeInTheDocument();
  });

  it('should render', () => {
    renderWithProviders(<PlayerColorJewel value={PlayerColor.Green} />);

    expect(screen.getByText(/^green$/i)).toBeInTheDocument();
  });

  it('should render label', () => {
    renderWithProviders(<PlayerColorJewel label="Color" />);

    expect(screen.getByLabelText(/^color$/i)).toHaveTextContent(/^blue$/i);
  });
});
