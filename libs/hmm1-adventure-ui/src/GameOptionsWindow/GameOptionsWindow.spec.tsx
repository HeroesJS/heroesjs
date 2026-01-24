import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { GameOptionsWindow } from './GameOptionsWindow';

describe(GameOptionsWindow, () => {
  it('should render', () => {
    renderWithProviders(<GameOptionsWindow open />);

    expect(screen.getByRole('region', { name: /^game options window$/i })).toBeInTheDocument();
  });
});
