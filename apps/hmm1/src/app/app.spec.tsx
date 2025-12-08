import { screen } from '@testing-library/react';

import { App } from './app';
import { renderWithProviders } from './testUtils';

describe(App, () => {
  it('should have a heading', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
