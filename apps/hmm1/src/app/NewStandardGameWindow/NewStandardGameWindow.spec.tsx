import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameWindow } from './NewStandardGameWindow';
import { GameDifficulty } from '../core';

describe(NewStandardGameWindow, () => {
  it('should render', () => {
    renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render labels', () => {
    renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

    expect(screen.getByText(/customize opponents:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose color:/i)).toBeInTheDocument();
    expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    expect(screen.getByText(/claw \( easy \)/i)).toBeInTheDocument();
    expect(screen.getByText(/difficulty rating: 60%/i)).toBeInTheDocument();
  });

  describe('game difficulty', () => {
    it('should render label', () => {
      renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

      expect(screen.getByText(/choose game difficulty:/i)).toBeInTheDocument();
    });

    it('should render options', () => {
      renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

      expect(screen.getByRole('radiogroup', { name: /game difficulty/i })).toBeInTheDocument();

      expect(screen.getByRole('radio', { name: /easy/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /normal/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /hard/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /expert/i })).toBeInTheDocument();

      expect(screen.getByRole('radio', { name: /easy/i })).toBeChecked();
    });

    it('should call handler when option clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} onGameDifficultyChange={handler} />
      );

      await user.click(screen.getByRole('radio', { name: /normal/i }));

      expect(handler).toHaveBeenCalledWith<[GameDifficulty]>(GameDifficulty.Normal);
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should call okay handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} onOkayClick={handler} />
      );

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} onCancelClick={handler} />
      );

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
