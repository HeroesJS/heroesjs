import { screen, within } from '@testing-library/react';

import { ComputerOpponentSetting, GameDifficulty, OpponentSettings, PlayerColor } from '../core';
import { renderWithProviders } from '../testUtils';
import { NewStandardGameWindow } from './NewStandardGameWindow';

describe(NewStandardGameWindow, () => {
  it('should render', () => {
    renderWithProviders(<NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  describe('game difficulty', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByText(/choose game difficulty:/i)).toBeInTheDocument();
    });

    it('should render options', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
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
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
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
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByText(/customize opponents:/i)).toBeInTheDocument();
    });

    it('should render no opponents by default', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getAllByRole('radio', { name: /none/i }).length).toBe(3);
    });

    describe('computer opponent', () => {
      it('should render', () => {
        renderWithProviders(
          <NewStandardGameWindow
            gameDifficulty={GameDifficulty.Easy}
            opponentSettings={[
              ComputerOpponentSetting.Dumb,
              ComputerOpponentSetting.None,
              ComputerOpponentSetting.None,
            ]}
            playerColor={PlayerColor.Blue}
          />
        );

        const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent 1 setting`, 'i') });

        expect(within(group).getByRole('radio', { name: /dumb/i })).toBeChecked();
      });

      it('should render info', async () => {
        const { user } = renderWithProviders(
          <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
        );

        await user.mouseRightDown(screen.getByRole('radiogroup', { name: /opponent 1 setting/i }));

        expect(
          screen.getByRole('dialog', {
            name: /change the difficulty of this opponent\. smarter computer players are more aggressive and think longer for each turn\./i,
          })
        );
      });

      it('should call handler when clicked', async () => {
        const handler = vitest.fn();

        const { user } = renderWithProviders(
          <NewStandardGameWindow
            gameDifficulty={GameDifficulty.Easy}
            onOpponentSettingsChange={handler}
            opponentSettings={[
              ComputerOpponentSetting.Dumb,
              ComputerOpponentSetting.None,
              ComputerOpponentSetting.None,
            ]}
            playerColor={PlayerColor.Blue}
          />
        );

        const group = screen.getByRole('radiogroup', { name: /opponent 1 setting/i });

        await user.click(group);

        expect(handler).toHaveBeenCalledWith<[OpponentSettings]>([
          ComputerOpponentSetting.Average,
          ComputerOpponentSetting.None,
          ComputerOpponentSetting.None,
        ]);
      });
    });

    describe('human opponent', () => {
      it('should render', () => {
        renderWithProviders(
          <NewStandardGameWindow
            gameDifficulty={GameDifficulty.Easy}
            opponentSettings={[GameDifficulty.Easy, ComputerOpponentSetting.None, ComputerOpponentSetting.None]}
            playerColor={PlayerColor.Blue}
          />
        );

        const group = screen.getByRole('radiogroup', { name: new RegExp(`opponent 1 setting`, 'i') });

        expect(within(group).getByRole('radio', { name: /human easy/i })).toBeChecked();
      });

      it('should render info', async () => {
        const { user } = renderWithProviders(
          <NewStandardGameWindow
            gameDifficulty={GameDifficulty.Easy}
            opponentSettings={[GameDifficulty.Easy, ComputerOpponentSetting.None, ComputerOpponentSetting.None]}
            playerColor={PlayerColor.Blue}
          />
        );

        await user.mouseRightDown(screen.getByRole('radiogroup', { name: /opponent 1 setting/i }));

        expect(
          screen.getByRole('dialog', {
            name: /change the starting difficulty of another human player\. higher difficulty levels start you off with fewer resources\./i,
          })
        );
      });

      it('should call handler when clicked', async () => {
        const handler = vitest.fn();

        const { user } = renderWithProviders(
          <NewStandardGameWindow
            gameDifficulty={GameDifficulty.Easy}
            onOpponentSettingsChange={handler}
            opponentSettings={[GameDifficulty.Easy, ComputerOpponentSetting.None, ComputerOpponentSetting.None]}
            playerColor={PlayerColor.Blue}
          />
        );

        const group = screen.getByRole('radiogroup', { name: /opponent 1 setting/i });

        await user.click(group);

        expect(handler).toHaveBeenCalledWith<[OpponentSettings]>([
          GameDifficulty.Normal,
          ComputerOpponentSetting.None,
          ComputerOpponentSetting.None,
        ]);
      });
    });
  });

  describe('player color', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByText(/choose color:/i)).toBeInTheDocument();
    });

    it('should render color', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(
        within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
      ).toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
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
          playerColor={PlayerColor.Blue}
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
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    });

    it('should render option', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByRole('checkbox', { name: /king of the hill:/i })).toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: /king of the hill:/i })).not.toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      await user.mouseRightDown(screen.getByRole('checkbox', { name: /king of the hill:/i }));

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
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('checkbox', { name: /king of the hill:/i }));

      expect(handler).toHaveBeenCalledWith<[boolean]>(true);
    });

    it('should render option as checked', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} kingOfTheHill playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByRole('checkbox', { name: /king of the hill:/i })).toBeChecked();
    });
  });

  describe('scenario selection', () => {
    it('should render label', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    });

    it('should render scenario name', () => {
      renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          playerColor={PlayerColor.Blue}
          scenarioName="Scenario"
        />
      );

      expect(screen.getByRole('textbox', { name: /scenario/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /scenario/i })).toHaveTextContent(/scenario/i);
    });

    it('should call select scenario handler when scenario name is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onSelectScenarioClick={handler}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('textbox', { name: /scenario/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render select scenario button', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByRole('button', { name: /select scenario/i })).toBeInTheDocument();
    });

    it('should call select scenario handler when select scenario is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <NewStandardGameWindow
          gameDifficulty={GameDifficulty.Easy}
          onSelectScenarioClick={handler}
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('button', { name: /select scenario/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      await user.mouseRightDown(screen.getByRole('button', { name: /select scenario/i }));

      expect(screen.getByRole('dialog', { name: /select which scenario to play\./i }));
    });
  });

  describe('difficulty rating', () => {
    it('should render', () => {
      renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByLabelText(/difficulty rating:/i)).toHaveTextContent(/0%/i);
    });

    it('should render rating', () => {
      renderWithProviders(
        <NewStandardGameWindow
          difficultyRating={60}
          gameDifficulty={GameDifficulty.Easy}
          playerColor={PlayerColor.Blue}
        />
      );

      expect(screen.getByLabelText(/difficulty rating:/i)).toHaveTextContent(/60%/i);
    });

    it('should render difficulty rating info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      await user.mouseRightDown(screen.getByLabelText(/difficulty rating:/i));

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
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
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
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
      );

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(
        <NewStandardGameWindow gameDifficulty={GameDifficulty.Easy} playerColor={PlayerColor.Blue} />
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
          playerColor={PlayerColor.Blue}
        />
      );

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
