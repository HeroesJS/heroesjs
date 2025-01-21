import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render main menu', async () => {
    renderWithProviders(<MainScreen />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeInTheDocument();
  });
});
