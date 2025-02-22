import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { MainMenu } from './MainMenu';

describe(MainMenu, () => {
  it('renders', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeInTheDocument();
  });

  describe('new game button', () => {
    it('renders button', async () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /new game/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handleNewGameClick = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onNewGameClick={handleNewGameClick} />);

      await user.click(screen.getByRole('button', { name: /new game/i }));

      expect(handleNewGameClick).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.rightDown(screen.getByRole('button', { name: /new game/i }));

      expect(screen.getByText(/start a single or multi-player game\./i)).toBeInTheDocument();
    });
  });

  describe('load game button', () => {
    it('renders button', async () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /load game/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handleLoadGameClick = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onLoadGameClick={handleLoadGameClick} />);

      await user.click(screen.getByRole('button', { name: /load game/i }));

      expect(handleLoadGameClick).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.rightDown(screen.getByRole('button', { name: /load game/i }));

      expect(screen.getByText(/load a prevously saved game\./i)).toBeInTheDocument();
    });
  });

  describe('view high scores button', () => {
    it('renders button', async () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /view high scores/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handleViewHighScoresClick = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onViewHighScoresClick={handleViewHighScoresClick} />);

      await user.click(screen.getByRole('button', { name: /view high scores/i }));

      expect(handleViewHighScoresClick).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.rightDown(screen.getByRole('button', { name: /view high scores/i }));

      expect(screen.getByText(/view the high score screen\./i)).toBeInTheDocument();
    });
  });

  describe('view credits button', () => {
    it('renders button', async () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /view credits/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handleViewCreditsClick = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onViewCreditsClick={handleViewCreditsClick} />);

      await user.click(screen.getByRole('button', { name: /view credits/i }));

      expect(handleViewCreditsClick).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.rightDown(screen.getByRole('button', { name: /view credits/i }));

      expect(screen.getByText(/view the credits screen\./i)).toBeInTheDocument();
    });
  });

  describe('quit button', () => {
    it('renders button', async () => {
      renderWithProviders(<MainMenu />);

      expect(screen.getByRole('button', { name: /quit/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handleQuitClick = vitest.fn();

      const { user } = renderWithProviders(<MainMenu onQuitClick={handleQuitClick} />);

      await user.click(screen.getByRole('button', { name: /quit/i }));

      expect(handleQuitClick).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const { user } = renderWithProviders(<MainMenu />);

      await user.rightDown(screen.getByRole('button', { name: /quit/i }));

      expect(screen.getByText(/quit heroes of might and magic and return to the dos prompt\./i)).toBeInTheDocument();
    });
  });
});
