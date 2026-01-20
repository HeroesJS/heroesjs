import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { GameTypeMenu } from './GameTypeMenu';

describe(GameTypeMenu, () => {
  it('should render', () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('menu', { name: /game type menu/i })).toBeInTheDocument();
  });

  describe('standard game button', () => {
    it('should render', () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', { name: /standard game/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameTypeMenu onStandardGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /standard game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /standard game/i }));

      expect(screen.getByRole('dialog', { name: /a single player game playing out a single map\./i }));
    });
  });

  describe('campaign game button', () => {
    it('should render', () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', { name: /campaign game/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameTypeMenu onCampaignGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /campaign game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /campaign game/i }));

      expect(screen.getByRole('dialog', { name: /a single player game playing through a series of maps\./i }));
    });
  });

  describe('multi-player game button', () => {
    it('should render', () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', { name: /multi-player game/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameTypeMenu onMultiPlayerGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /multi-player game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /multi-player game/i }));

      expect(
        screen.getByRole('dialog', {
          name: /a multi-player game, with several human players competing against each other on a single map\./i,
        })
      );
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameTypeMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /cancel back to the main menu\./i }));
    });
  });
});
