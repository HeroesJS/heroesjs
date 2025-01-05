import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testUtils';

import { NewGameWindow } from './NewGameWindow';

describe(NewGameWindow, () => {
  it('renders', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('dialog', { name: /new game window/i })).toBeInTheDocument();
  });
});
