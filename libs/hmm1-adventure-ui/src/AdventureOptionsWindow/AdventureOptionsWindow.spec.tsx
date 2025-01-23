import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureOptionsWindow } from './AdventureOptionsWindow';

describe(AdventureOptionsWindow, () => {
  it('renders window', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('dialog', { name: /adventure options/i })).toBeInTheDocument();
  });

  it('renders view world button', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('button', { name: /view world/i })).toBeInTheDocument();
  });

  it('class handler when view world button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureOptionsWindow onViewWorldClick={handler} />);

    await user.click(screen.getByRole('button', { name: /view world/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders view puzzle button', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('button', { name: /view puzzle/i })).toBeInTheDocument();
  });

  it('class handler when view puzzle button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureOptionsWindow onViewPuzzleClick={handler} />);

    await user.click(screen.getByRole('button', { name: /view puzzle/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cast spell button', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('button', { name: /cast spell/i })).toBeInTheDocument();
  });

  it('class handler when cast spell button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureOptionsWindow onCastSpellClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cast spell/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders dig button', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('button', { name: /dig/i })).toBeInTheDocument();
  });

  it('class handler when dig button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureOptionsWindow onDigClick={handler} />);

    await user.click(screen.getByRole('button', { name: /dig/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders okay button', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('class handler when okay button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<AdventureOptionsWindow onConfirmClick={handler} />);

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });
});
