import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureButtons } from './AdventureButtons';

describe(AdventureButtons, () => {
  describe('next hero button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^next hero$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onNextHeroClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^next hero$/i }));

      expect(handler).toBeCalled();
    });
  });

  describe('move button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^move$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onMoveClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^move$/i }));

      expect(handler).toBeCalled();
    });
  });

  describe('kingdom overview button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^kingdom overview$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onKingdomOverview={handler} />);

      await user.click(screen.getByRole('button', { name: /^kingdom overview$/i }));

      expect(handler).toBeCalled();
    });
  });

  describe('end turn button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^end turn$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onEndTurnClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^end turn$/i }));

      expect(handler).toBeCalled();
    });
  });

  describe('adventure options button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^adventure options$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onAdventureOptionsClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^adventure options$/i }));

      expect(handler).toBeCalled();
    });
  });

  describe('game options button', () => {
    it('should render', () => {
      renderWithProviders(<AdventureButtons />);

      expect(screen.getByRole('button', { name: /^game options$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureButtons onGameOptionsClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^game options$/i }));

      expect(handler).toBeCalled();
    });
  });
});
