import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureScreen } from './AdventureScreen';

describe(AdventureScreen, () => {
  it('should render', () => {
    renderWithProviders(<AdventureScreen />);

    expect(screen.getByRole('main', { name: /^adventure screen$/i })).toBeInTheDocument();
  });

  it('should render children', () => {
    renderWithProviders(<AdventureScreen>CHILDREN</AdventureScreen>);

    expect(screen.getByText(/^children$/i)).toBeInTheDocument();
  });
});
