import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureButtons } from './AdventureButtons';

describe(AdventureButtons, () => {
  it('renders next hero button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /next hero/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next hero/i })).toBeEnabled();
  });

  it('disables next hero button', async () => {
    renderWithProviders(<AdventureButtons nextHeroDisabled />);

    expect(screen.getByRole('button', { name: /next hero/i })).toBeDisabled();
  });

  it('calls handler when next hero button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onNextHeroClick={handler} />);

    await user.click(screen.getByRole('button', { name: /next hero/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders move button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /move/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /move/i })).toBeEnabled();
  });

  it('disables move button', async () => {
    renderWithProviders(<AdventureButtons moveDisabled />);

    expect(screen.getByRole('button', { name: /move/i })).toBeDisabled();
  });

  it('calls handler when move button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onMoveClick={handler} />);

    await user.click(screen.getByRole('button', { name: /move/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders kingdom overview button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /kingdom overview/i })).toBeInTheDocument();
  });

  it('calls handler when kingdom overview button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onKingdomOverviewClick={handler} />);

    await user.click(screen.getByRole('button', { name: /kingdom overview/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders end turn button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /end turn/i })).toBeInTheDocument();
  });

  it('calls handler when end turn button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onEndTurnClick={handler} />);

    await user.click(screen.getByRole('button', { name: /end turn/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders adventure options button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /adventure options/i })).toBeInTheDocument();
  });

  it('calls handler when adventure options button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onAdventureOptionsClick={handler} />);

    await user.click(screen.getByRole('button', { name: /adventure options/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders game options button', async () => {
    renderWithProviders(<AdventureButtons />);

    expect(screen.getByRole('button', { name: /game options/i })).toBeInTheDocument();
  });

  it('calls handler when game options button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureButtons onGameOptionsClick={handler} />);

    await user.click(screen.getByRole('button', { name: /game options/i }));

    expect(handler).toHaveBeenCalled();
  });
});
