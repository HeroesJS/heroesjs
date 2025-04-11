import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {AdventureButtons} from './AdventureButtons';

describe(AdventureButtons, () => {
  describe('next hero button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /next hero/i})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /next hero/i})).toBeEnabled();
    });

    it('disables button', async () => {
      renderWithProviders(<AdventureButtons nextHeroDisabled />);

      expect(screen.getByRole('button', {name: /next hero/i})).toHaveAttribute('aria-disabled', 'true');
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onNextHeroClick={handler} />);

      await user.click(screen.getByRole('button', {name: /next hero/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /next hero/i}));

      expect(screen.getByText(/next hero select the next hero\./i)).toBeInTheDocument();
    });

    it('renders info when disabled', async () => {
      const {user} = renderWithProviders(<AdventureButtons nextHeroDisabled />);

      await user.rightDown(screen.getByRole('button', {name: /next hero/i}));

      expect(screen.getByText(/next hero select the next hero\./i)).toBeInTheDocument();
    });
  });

  describe('move button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /move/i})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /move/i})).toBeEnabled();
    });

    it('disables button', async () => {
      renderWithProviders(<AdventureButtons moveDisabled />);

      expect(screen.getByRole('button', {name: /move/i})).toHaveAttribute('aria-disabled', 'true');
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onMoveClick={handler} />);

      await user.click(screen.getByRole('button', {name: /move/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /move/i}));

      expect(screen.getByText(/continue movement continue the hero's movement along his current path\./i));
    });

    it('renders info when disabled', async () => {
      const {user} = renderWithProviders(<AdventureButtons moveDisabled />);

      await user.rightDown(screen.getByRole('button', {name: /move/i}));

      expect(screen.getByText(/continue movement continue the hero's movement along his current path\./i));
    });
  });

  describe('kingdom overview button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /kingdom overview/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onKingdomOverviewClick={handler} />);

      await user.click(screen.getByRole('button', {name: /kingdom overview/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /kingdom overview/i}));

      expect(screen.getByText(/kingdom summary view a summary of your kingdom\./i));
    });
  });

  describe('end turn button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /end turn/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onEndTurnClick={handler} />);

      await user.click(screen.getByRole('button', {name: /end turn/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /end turn/i}));

      expect(screen.getByText(/end turn end your turn and let the computer take its turn\./i));
    });
  });

  describe('adventure options button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /adventure options/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onAdventureOptionsClick={handler} />);

      await user.click(screen.getByRole('button', {name: /adventure options/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /adventure options/i}));

      expect(screen.getByText(/adventure options bring up the adventure options menu\./i));
    });
  });

  describe('game options button', () => {
    it('renders button', async () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', {name: /game options/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureButtons onGameOptionsClick={handler} />);

      await user.click(screen.getByRole('button', {name: /game options/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const {user} = renderWithProviders(<AdventureButtons />);

      await user.rightDown(screen.getByRole('button', {name: /game options/i}));

      expect(screen.getByText(/game options bring up the game options menu\./i));
    });
  });
});
