import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { MainMenu } from './MainMenu';

describe(MainMenu, () => {
  it('should render', () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeInTheDocument();
  });

  describe('new game button', () => {
    it('should render', () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /new game/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onNewGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /new game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /new game/i }));

      expect(screen.getByRole('dialog', { name: /start a single or multi-player game\./i })).toBeInTheDocument();
    });
  });

  describe('load game button', () => {
    it('should render', () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /load game/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onLoadGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /load game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /load game/i }));

      expect(screen.getByRole('dialog', { name: /load a previously saved game\./i })).toBeInTheDocument();
    });
  });

  describe('view high scores button', () => {
    it('should render', () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /view high scores/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onViewHighScoresClick={handler} />);

      await user.click(screen.getByRole('button', { name: /view high scores/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /view high scores/i }));

      expect(screen.getByRole('dialog', { name: /view the high score screen\./i })).toBeInTheDocument();
    });
  });

  describe('view credits button', () => {
    it('should render', () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /view credits/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onViewCreditsClick={handler} />);

      await user.click(screen.getByRole('button', { name: /view credits/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /view credits/i }));

      expect(screen.getByRole('dialog', { name: /view the credits screen\./i })).toBeInTheDocument();
    });
  });

  describe('quit button', () => {
    it('should render', () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /quit/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onQuitClick={handler} />);

      await user.click(screen.getByRole('button', { name: /quit/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /quit/i }));

      expect(
        screen.getByRole('dialog', { name: /quit heroes of might and magic and return to the dos prompt\./i })
      ).toBeInTheDocument();
    });
  });
});
