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
        scenarioName="Scenario"
      />
    );

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  describe('game difficulty', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
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
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('radiogroup', { name: /game difficulty/i })).toBeInTheDocument();

      expect(screen.getByRole('radio', { name: /easy/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /normal/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /hard/i })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /expert/i })).toBeInTheDocument();

      expect(screen.getByRole('radio', { name: /easy/i })).toBeChecked();
    });

    it('should render info when option is right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('radio', { name: /easy/i }));

      expect(
        screen.getByRole('dialog', {
          name: /change the starting difficulty at which you will play\. higher difficulty levels start you off with fewer resources\./i,
        })
      ).toBeInTheDocument();
    });

    it('should call handler when option clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onGameDifficultyChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
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
          scenarioName="Scenario"
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
          scenarioName="Scenario"
        />
      );

      range(1, MaxPlayerCount).forEach((i) => {
        const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent ${i} setting`, 'i') });

        expect(within(group).getByRole('radio', { name: /dumb/i })).toBeChecked();
      });
    });

    it('should render opponent setting info when option is right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('radiogroup', { name: /opponent 1 setting/i }));

      expect(
        screen.getByRole('dialog', {
          name: /change the difficulty of this opponent\. smarter computer players are more aggressive and think longer for each turn\./i,
        })
      );
    });

    it('should call handler when setting clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onOpponentSettingsChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
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
          scenarioName="Scenario"
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
          scenarioName="Scenario"
        />
      );

      expect(
        within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
      ).toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('radiogroup', { name: /player color/i }));

      expect(screen.getByRole('dialog', { name: /change your banner color\./i })).toBeInTheDocument();
    });

    it('should call handler when option is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onPlayerColorChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.click(
        within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
      );

      expect(handler).toHaveBeenCalledWith<[PlayerColor]>(PlayerColor.Green);
    });
  });

  describe('king of the hill', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    });

    it('should render option', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('checkbox', { name: /king of the hill/i })).toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: /king of the hill/i })).not.toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('checkbox', { name: /king of the hill/i }));

      expect(
        screen.getByRole('dialog', {
          name: /challenge all computer players as 'king of the hill'\. computer players will be offended by your boastfulness, and lay off each other in an attempt to beat you to a pulp\./i,
        })
      );
    });

    it('should call handler when option is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onKingOfTheHillChange={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.click(screen.getByRole('checkbox', { name: /king of the hill/i }));

      expect(handler).toHaveBeenCalledWith<[boolean]>(true);
    });

    it('should render option as checked', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          kingOfTheHill
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('checkbox', { name: /king of the hill/i })).toBeChecked();
    });
  });

  describe('scenario selection', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    });

    it('should render scenario name', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('textbox', { name: /scenario/i })).toBeInTheDocument();
    });

    it('should call select scenario handler when scenario name is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onSelectScenarioClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.click(screen.getByRole('textbox', { name: /scenario/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render select scenario button', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('button', { name: /select scenario/i })).toBeInTheDocument();
    });

    it('should call select scenario handler when select scenario is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onSelectScenarioClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.click(screen.getByRole('button', { name: /select scenario/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('button', { name: /select scenario/i }));

      expect(screen.getByRole('dialog', { name: /select which scenario to play\./i }));
    });
  });

  describe('difficulty rating', () => {
    it('should render', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByText(/difficulty rating: 60%/i)).toBeInTheDocument();
    });

    it('should render difficulty rating info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByText(/difficulty rating: 60%/i));

      await expect(
        screen.getByRole('dialog', {
          name: /the difficulty rating reflects a combination of various settings for your game\. this number will be applied to your final score\./i,
        })
      );
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.mouseRightDown(screen.getByRole('button', { name: /okay/i }));

      expect(screen.getByRole('dialog', { name: /accept these settings and start a new game\./i }));
    });

    it('should call okay handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onOkayClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
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
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /return to the main menu\./i }));
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onCancelClick={handler}
          opponentSettings={opponentSettings}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
