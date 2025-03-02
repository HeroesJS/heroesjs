import { screen } from '@testing-library/react';

import { CreatureId, CreatureSpeed, Luck, Morale, Skill } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { type CreatureInfo, TroopDetailsWindow } from './TroopDetailsWindow';

describe(TroopDetailsWindow, () => {
  const creature: CreatureInfo = {
    hitPoints: 1,
    id: CreatureId.Peasant,
    luck: Luck.Good,
    maxDamage: 1,
    minDamange: 1,
    morale: Morale.Great,
    shots: 0,
    skills: {
      [Skill.Attack]: 1,
      [Skill.Defense]: 1,
    },
    speed: CreatureSpeed.Slow,
  };

  it('renders dialog', () => {
    renderWithProviders(<TroopDetailsWindow creature={creature} />);

    expect(screen.getByRole('dialog', { name: /troop details/i })).toBeInTheDocument();
  });

  it('renders count', () => {
    renderWithProviders(<TroopDetailsWindow count={123} creature={creature} />);

    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  it('renders creature', () => {
    renderWithProviders(<TroopDetailsWindow creature={creature} />);

    expect(screen.getByText(/peasant/i)).toBeInTheDocument();
  });

  it('renders skills', () => {
    renderWithProviders(<TroopDetailsWindow creature={creature} />);

    expect(screen.getByText(/attack skill: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/defense skill: 1/i)).toBeInTheDocument();
  });

  it('renders skills with bonuses', () => {
    renderWithProviders(
      <TroopDetailsWindow
        creature={creature}
        skillsBonus={{
          [Skill.Attack]: 1,
          [Skill.Defense]: 2,
        }}
      />,
    );

    expect(screen.getByText(/attack skill: 1 \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/defense skill: 1 \(3\)/i)).toBeInTheDocument();
  });

  it('renders stats', () => {
    renderWithProviders(<TroopDetailsWindow creature={creature} />);

    expect(screen.getByText(/damage: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/hit points: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/speed: slow/i)).toBeInTheDocument();
    expect(screen.getByText(/morale: great/i)).toBeInTheDocument();
    expect(screen.getByText(/luck: good/i)).toBeInTheDocument();
  });

  it('renders damage range', () => {
    renderWithProviders(
      <TroopDetailsWindow
        creature={{
          ...creature,
          maxDamage: 3,
          minDamange: 2,
        }}
      />,
    );

    expect(screen.getByText(/damage: 2-3/i)).toBeInTheDocument();
  });

  describe('dismiss button', () => {
    it('does not render button by default', () => {
      renderWithProviders(<TroopDetailsWindow creature={creature} />);

      expect(screen.queryByRole('button', { name: /dismiss/i })).not.toBeInTheDocument();
    });

    it('renders button when dismiss is allowed', () => {
      renderWithProviders(<TroopDetailsWindow allowDismiss creature={creature} />);

      expect(screen.getByRole('button', { name: /dismiss/i })).toBeInTheDocument();
    });

    it('renders confirm modal when clicked', async () => {
      const { user } = renderWithProviders(<TroopDetailsWindow allowDismiss creature={creature} />);

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      expect(screen.getByRole('dialog', { name: /are you sure you want to dismiss this army\?/i })).toBeInTheDocument();
    });

    it('calls handler when confirm is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <TroopDetailsWindow allowDismiss creature={creature} onDismissClick={handler} />,
      );

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      await user.click(screen.getByRole('button', { name: /yes/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('hides modal when cancel is clicked', async () => {
      const { user } = renderWithProviders(<TroopDetailsWindow allowDismiss creature={creature} />);

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      await user.click(screen.getByRole('button', { name: /no/i }));

      expect(
        screen.queryByRole('dialog', { name: /are you sure you want to dismiss this army\?/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('exit button', () => {
    it('renders button', () => {
      renderWithProviders(<TroopDetailsWindow creature={creature} />);

      expect(screen.getByRole('button', { name: /exit/i })).toBeInTheDocument();
    });

    it('calls handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<TroopDetailsWindow creature={creature} onExitClick={handler} />);

      await user.click(screen.getByRole('button', { name: /exit/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('does not render button when hide exit is set', () => {
      renderWithProviders(<TroopDetailsWindow creature={creature} hideExit />);

      expect(screen.queryByRole('button', { name: /exit/i })).not.toBeInTheDocument();
    });
  });
});
