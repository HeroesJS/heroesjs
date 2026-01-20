import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render', () => {
    renderWithProviders(<MainScreen />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
