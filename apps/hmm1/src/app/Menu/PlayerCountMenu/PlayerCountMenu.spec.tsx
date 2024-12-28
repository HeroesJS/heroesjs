import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import { PlayerCountMenu } from './PlayerCountMenu';

describe(PlayerCountMenu, () => {
  it('renders', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('menu', { name: /player count menu/i })).toBeInTheDocument();
  });

  it('renders 2 players button', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('button', { name: /2 players/i })).toBeInTheDocument();
  });

  it('calls handler when 2 players button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerCountMenu onCountClick={handler} />);

    await user.click(screen.getByRole('button', { name: /2 players/i }));

    expect(handler).toHaveBeenCalledWith(2);
  });

  it('renders 3 players button', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('button', { name: /3 players/i })).toBeInTheDocument();
  });

  it('calls handler when 3 players button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerCountMenu onCountClick={handler} />);

    await user.click(screen.getByRole('button', { name: /3 players/i }));

    expect(handler).toHaveBeenCalledWith(3);
  });

  it('renders 4 players button', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('button', { name: /4 players/i })).toBeInTheDocument();
  });

  it('calls handler when 4 players button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerCountMenu onCountClick={handler} />);

    await user.click(screen.getByRole('button', { name: /4 players/i }));

    expect(handler).toHaveBeenCalledWith(4);
  });

  it('renders cancel button', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerCountMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
