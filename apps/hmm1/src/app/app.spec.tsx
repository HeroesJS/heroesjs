import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { App } from './app';

describe(App, () => {
  it('should render main screen', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
