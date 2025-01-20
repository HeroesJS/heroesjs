import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';

describe(MultiPlayerGameTypeMenu, () => {
  it('renders', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('menu', { name: /multi-player game type menu/i })).toBeInTheDocument();
  });

  it('renders hot seat button', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('button', { name: /hot seat/i })).toBeInTheDocument();
  });

  it('calls handler when hot seat button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onHotSeatClick={handler} />);

    await user.click(screen.getByRole('button', { name: /hot seat/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders network button', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('button', { name: /network/i })).toBeInTheDocument();
  });

  it('calls handler when network button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onNetworkClick={handler} />);

    await user.click(screen.getByRole('button', { name: /network/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders modem button', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('button', { name: /modem/i })).toBeInTheDocument();
  });

  it('calls handler when modem button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onModemClick={handler} />);

    await user.click(screen.getByRole('button', { name: /modem/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders direct connect button', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('button', { name: /direct connect/i })).toBeInTheDocument();
  });

  it('calls handler when direct connect button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onDirectConnectClick={handler} />);

    await user.click(screen.getByRole('button', { name: /direct connect/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cancel button', async () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
