import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { PlayerCountMenu } from './PlayerCountMenu';

describe(PlayerCountMenu, () => {
  it('should render', () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('menu', { name: /player count menu/i })).toBeInTheDocument();
  });

  describe('2 players button', () => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: /2 players/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: /2 players/i }));

      expect(handler).toHaveBeenCalledWith<[number]>(2);
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<PlayerCountMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /2 players/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play with 2 human players, and optionally, up to 2 additional computer players\./i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('3 players button', () => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: /3 players/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: /3 players/i }));

      expect(handler).toHaveBeenCalledWith<[number]>(3);
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<PlayerCountMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /3 players/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play with 3 human players, and optionally 1 computer player\./i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('4 players button', () => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: /4 players/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: /4 players/i }));

      expect(handler).toHaveBeenCalledWith<[number]>(4);
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<PlayerCountMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /4 players/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play with 4 human players\./i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<PlayerCountMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(
        screen.getByRole('dialog', {
          name: /cancel back to the main menu\./i,
        })
      ).toBeInTheDocument();
    });
  });
});
