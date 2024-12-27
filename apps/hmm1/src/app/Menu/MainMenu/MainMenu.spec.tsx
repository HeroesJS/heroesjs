import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import { MainMenu } from './MainMenu';

describe(MainMenu, () => {
  it('renders', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeInTheDocument();
  });

  it('renders new game button', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('button', { name: /new game/i })).toBeInTheDocument();
  });

  it('calls handler when new game button is clicked', async () => {
    const handleNewGameClick = vitest.fn();

    const { user } = renderWithProviders(<MainMenu onNewGameClick={handleNewGameClick} />);

    await user.click(screen.getByRole('button', { name: /new game/i }));

    expect(handleNewGameClick).toHaveBeenCalled();
  });

  it('renders load game button', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('button', { name: /load game/i })).toBeInTheDocument();
  });

  it('calls handler when load game button is clicked', async () => {
    const handleLoadGameClick = vitest.fn();

    const { user } = renderWithProviders(<MainMenu onLoadGameClick={handleLoadGameClick} />);

    await user.click(screen.getByRole('button', { name: /load game/i }));

    expect(handleLoadGameClick).toHaveBeenCalled();
  });

  it('renders view high scores button', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('button', { name: /view high scores/i })).toBeInTheDocument();
  });

  it('calls handler when view high scores button is clicked', async () => {
    const handleViewHighScoresClick = vitest.fn();

    const { user } = renderWithProviders(<MainMenu onViewHighScoresClick={handleViewHighScoresClick} />);

    await user.click(screen.getByRole('button', { name: /view high scores/i }));

    expect(handleViewHighScoresClick).toHaveBeenCalled();
  });

  it('renders view credits button', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('button', { name: /view credits/i })).toBeInTheDocument();
  });

  it('calls handler when view credits button is clicked', async () => {
    const handleViewCreditsClick = vitest.fn();

    const { user } = renderWithProviders(<MainMenu onViewCreditsClick={handleViewCreditsClick} />);

    await user.click(screen.getByRole('button', { name: /view credits/i }));

    expect(handleViewCreditsClick).toHaveBeenCalled();
  });

  it('renders quit button', async () => {
    renderWithProviders(<MainMenu />);

    expect(screen.getByRole('button', { name: /quit/i })).toBeInTheDocument();
  });

  it('calls handler when quit button is clicked', async () => {
    const handleQuitClick = vitest.fn();

    const { user } = renderWithProviders(<MainMenu onQuitClick={handleQuitClick} />);

    await user.click(screen.getByRole('button', { name: /quit/i }));

    expect(handleQuitClick).toHaveBeenCalled();
  });
});
