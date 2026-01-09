import { screen, within } from '@testing-library/react';
import { range } from 'lodash';

import { GameDifficulty, MaxPlayerCount, OpponentSetting, PlayerColor } from '../core';
import { renderWithProviders } from '../testUtils';
import { NewStandardGameWindow } from './NewStandardGameWindow';

describe(NewStandardGameWindow, () => {
  const opponentSettings: readonly OpponentSetting[] = new Array(MaxPlayerCount - 1).fill(OpponentSetting.Dumb);

  it('should render', () => {
    renderWithProviders(
      <NewStandardGameWindow
        gameDifficulty={GameDifficulty.Easy}
        opponentSettings={opponentSettings}
        playerColor={PlayerColor.Blue}
      />
    );

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render labels', () => {
    renderWithProviders(
      <NewStandardGameWindow
        gameDifficulty={GameDifficulty.Easy}
        opponentSettings={opponentSettings}
        playerColor={PlayerColor.Blue}
      />
    );

    expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    expect(screen.getByText(/claw \( easy \)/i)).toBeInTheDocument();
    expect(screen.getByText(/difficulty rating: 60%/i)).toBeInTheDocument();
  });

  describe('game difficulty', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByText(/choose game difficulty:/i)).toBeInTheDocument();
    });

    it('should render options', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

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
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onGameDifficultyChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('radio', { name: /normal/i }));

      expect(handler).toHaveBeenCalledWith<[GameDifficulty]>(GameDifficulty.Normal);
    });
  });

  describe('opponent settings', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByText(/customize opponents:/i)).toBeInTheDocument();
    });

    it('should render settings', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      range(1, MaxPlayerCount).forEach((i) => {
        const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent ${i} setting`, 'i') });

        expect(within(group).getByRole('radio', { name: /dumb/i })).toBeChecked();
      });
    });

    it('should call handler when setting clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onOpponentSettingsChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      const group = screen.getByRole('radiogroup', { name: /opponent 1 setting/i });

      await user.click(group);

      expect(handler).toHaveBeenCalledWith<[readonly OpponentSetting[]]>([
        OpponentSetting.Average,
        OpponentSetting.Dumb,
        OpponentSetting.Dumb,
      ]);
    });
  });

  describe('player color', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByText(/choose color:/i)).toBeInTheDocument();
    });

    it('should render color', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(
        within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
      ).toBeChecked();
    });

    it('should call handler when option is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onPlayerColorChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(
        within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
      );

      expect(handler).toHaveBeenCalledWith<[PlayerColor]>(PlayerColor.Green);
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should call okay handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onOkayClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onCancelClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
