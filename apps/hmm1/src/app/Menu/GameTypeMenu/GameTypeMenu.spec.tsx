import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import { GameTypeMenu } from './GameTypeMenu';

describe(GameTypeMenu, () => {
  it('renders', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('menu', { name: /game type menu/i })).toBeDefined();
  });

  it('renders standard game button', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('button', { name: /standard game/i })).toBeDefined();
  });

  it('calls handler when standard game button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<GameTypeMenu onStandardGameClick={handler} />);

    await user.click(screen.getByRole('button', { name: /standard game/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders campaign game button', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('button', { name: /campaign game/i })).toBeDefined();
  });

  it('calls handler when campaign game button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<GameTypeMenu onCampaignGameClick={handler} />);

    await user.click(screen.getByRole('button', { name: /campaign game/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders multi-player game button', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('button', { name: /multi-player game/i })).toBeDefined();
  });

  it('calls handler when multi-player game button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<GameTypeMenu onMultiPlayerGameClick={handler} />);

    await user.click(screen.getByRole('button', { name: /multi-player game/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cancel button', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeDefined();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<GameTypeMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
