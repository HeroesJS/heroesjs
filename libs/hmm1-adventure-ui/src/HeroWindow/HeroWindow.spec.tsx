import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { HeroWindow } from './HeroWindow';

describe(HeroWindow, () => {
  it('renders window', () => {
    renderWithProviders(<HeroWindow />);

    expect(screen.getByRole('dialog', { name: /hero window/i })).toBeInTheDocument();
  });
});
