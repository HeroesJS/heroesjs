import { screen, within } from '@testing-library/react';
import { range } from 'lodash';

import { ScenarioDifficulty, ScenarioSize } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { NewGameWindow } from './NewGameWindow';

describe(NewGameWindow, () => {
  it('renders window', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('dialog', { name: /new game window/i })).toBeInTheDocument();
  });

  it('renders difficulty heading', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('heading', { name: /choose game difficulty/i })).toBeInTheDocument();
  });

  it('renders difficulty menu', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('menu', { name: /game difficulty/i })).toBeInTheDocument();

    const menu = screen.getByRole('menu', { name: /game difficulty/i });

    expect(within(menu).getByRole('option', { name: /easy/i })).toBeInTheDocument();
    expect(within(menu).getByRole('option', { name: /normal/i })).toBeInTheDocument();
    expect(within(menu).getByRole('option', { name: /hard/i })).toBeInTheDocument();
    expect(within(menu).getByRole('option', { name: /expert/i })).toBeInTheDocument();
  });

  it('changes difficulty when option is clicked', async () => {
    const { user } = renderWithProviders(<NewGameWindow />);

    await user.click(screen.getByRole('option', { name: /expert/i }));

    expect(screen.getByRole('option', { name: /expert/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('renders opponent settings heading', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('heading', { name: /customize opponents/i })).toBeInTheDocument();
  });

  it('renders opponent settings', async () => {
    renderWithProviders(<NewGameWindow />);

    for (const i in range(1, 4).values()) {
      const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent ${i} setting`, 'i') });

      expect(group).toBeInTheDocument();
      expect(within(group).getByRole('radio', { name: /average/i })).toBeChecked();
      expect(screen.getByRole('button', { name: new RegExp(`change opponent ${i} setting`, 'i') })).toBeInTheDocument();
    }
  });

  it('changes opponent setting when button is clicked', async () => {
    const { user } = renderWithProviders(<NewGameWindow />);

    for (const i in range(1, 4).values()) {
      await user.click(screen.getByRole('button', { name: new RegExp(`change opponent ${i} setting`) }));

      const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent ${i} setting`, 'i') });

      expect(within(group).getByRole('radio', { name: /smart/i })).toBeChecked();
    }
  });

  it('renders banner color heading', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('heading', { name: /choose color/i })).toBeInTheDocument();
  });

  it('renders banner color menu', async () => {
    renderWithProviders(<NewGameWindow />);

    const group = screen.getByRole('radiogroup', { name: /banner color/i });

    expect(group).toBeInTheDocument();

    expect(within(group).getByRole('radio', { name: /blue/i })).toBeInTheDocument();
    expect(within(group).getByRole('radio', { name: /green/i })).toBeInTheDocument();
    expect(within(group).getByRole('radio', { name: /red/i })).toBeInTheDocument();
    expect(within(group).getByRole('radio', { name: /yellow/i })).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: /blue/i })).toHaveAttribute('aria-checked', 'true');

    expect(screen.getByRole('button', { name: /change banner color/i })).toBeInTheDocument();
  });

  it('changes banner color when button is clicked', async () => {
    const { user } = renderWithProviders(<NewGameWindow />);

    await user.click(screen.getByRole('button', { name: /change banner color/i }));

    expect(screen.getByRole('radio', { name: /green/i })).toHaveAttribute('aria-checked', 'true');
  });

  it('renders king of the hill heading', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('heading', { name: /king of the hill/i })).toBeInTheDocument();
  });

  it('renders king of the hill checkbox', async () => {
    renderWithProviders(<NewGameWindow />);

    const checkbox = screen.getByRole('checkbox', { name: /king of the hill/i });

    expect(checkbox).toBeInTheDocument();
  });

  it('renders scenario heading', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('heading', { name: /choose scenario/i })).toBeInTheDocument();
  });

  it('renders scenario', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('textbox', { name: /scenario/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /scenario/i })).toHaveValue('');
    expect(screen.getByRole('button', { name: /select scenario/i })).toBeInTheDocument();
  });

  it('renders scenario name', async () => {
    renderWithProviders(
      <NewGameWindow
        scenario={{
          difficulty: ScenarioDifficulty.Easy,
          name: 'My Scenario',
          size: ScenarioSize.Small,
        }}
      />,
    );

    expect(screen.getByRole('textbox', { name: /scenario/i })).toHaveValue('My Scenario');
  });

  it('calls handler when scenario input is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<NewGameWindow onSelectScenarioClick={handler} />);

    await user.click(screen.getByRole('textbox', { name: /scenario/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('calls handler when select scenario is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<NewGameWindow onSelectScenarioClick={handler} />);

    await user.click(screen.getByRole('button', { name: /select scenario/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders rating', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByText(/difficulty rating: 50%/i)).toBeInTheDocument();
  });

  it('renders confirm button', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('renders confirm button as disabled by default', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders confirm button as enabled when scenario is set', async () => {
    renderWithProviders(
      <NewGameWindow
        scenario={{
          difficulty: ScenarioDifficulty.Easy,
          name: 'Scenario Nmae',
          size: ScenarioSize.Small,
        }}
      />,
    );

    expect(screen.getByRole('button', { name: /okay/i })).toBeEnabled();
  });

  it('calls handler when confirm button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <NewGameWindow
        onConfirmClick={handler}
        scenario={{
          difficulty: ScenarioDifficulty.Easy,
          name: 'Scenario Nmae',
          size: ScenarioSize.Small,
        }}
      />,
    );

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cancel button', async () => {
    renderWithProviders(<NewGameWindow />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<NewGameWindow onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
