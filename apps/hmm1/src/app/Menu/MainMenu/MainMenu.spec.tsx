import { fireEvent, render, screen } from '@testing-library/react';

import { MainMenu } from './MainMenu';

describe(MainMenu, () => {
  it('renders', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeDefined();
  });

  it('renders new game button', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('button', { name: /new game/i })).toBeDefined();
  });

  it('calls handler when new game button is clicked', async () => {
    const handleNewGameClick = vitest.fn();

    render(<MainMenu onNewGameClick={handleNewGameClick} />);

    fireEvent.click(screen.getByRole('button', { name: /new game/i }));

    expect(handleNewGameClick).toHaveBeenCalled();
  });

  it('renders load game button', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('button', { name: /load game/i })).toBeDefined();
  });

  it('calls handler when load game button is clicked', async () => {
    const handleLoadGameClick = vitest.fn();

    render(<MainMenu onLoadGameClick={handleLoadGameClick} />);

    fireEvent.click(screen.getByRole('button', { name: /load game/i }));

    expect(handleLoadGameClick).toHaveBeenCalled();
  });

  it('renders view high scores button', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('button', { name: /view high scores/i })).toBeDefined();
  });

  it('calls handler when view high scores button is clicked', async () => {
    const handleViewHighScoresClick = vitest.fn();

    render(<MainMenu onViewHighScoresClick={handleViewHighScoresClick} />);

    fireEvent.click(screen.getByRole('button', { name: /view high scores/i }));

    expect(handleViewHighScoresClick).toHaveBeenCalled();
  });

  it('renders view credits button', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('button', { name: /view credits/i })).toBeDefined();
  });

  it('calls handler when view credits button is clicked', async () => {
    const handleViewCreditsClick = vitest.fn();

    render(<MainMenu onViewCreditsClick={handleViewCreditsClick} />);

    fireEvent.click(screen.getByRole('button', { name: /view credits/i }));

    expect(handleViewCreditsClick).toHaveBeenCalled();
  });

  it('renders quit button', async () => {
    render(<MainMenu />);

    expect(screen.getByRole('button', { name: /quit/i })).toBeDefined();
  });

  it('calls handler when quit button is clicked', async () => {
    const handleQuitClick = vitest.fn();

    render(<MainMenu onQuitClick={handleQuitClick} />);

    fireEvent.click(screen.getByRole('button', { name: /quit/i }));

    expect(handleQuitClick).toHaveBeenCalled();
  });
});
