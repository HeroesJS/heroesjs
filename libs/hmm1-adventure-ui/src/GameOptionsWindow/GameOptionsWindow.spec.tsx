import { screen, within } from '@testing-library/react';

import { MaxVolume, MinVolume, MovementSpeed } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { GameOptionsWindow } from './GameOptionsWindow';

describe(GameOptionsWindow, () => {
  it('renders window', () => {
    renderWithProviders(<GameOptionsWindow />);

    expect(screen.getByRole('dialog', { name: /game options window/i })).toBeInTheDocument();
  });

  describe('new game', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /new game/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onNewGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /new game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /new game/i }));

      expect(screen.getByText(/start a single or multi-player game\./i)).toBeInTheDocument();
    });
  });

  describe('load game', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /load game/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onLoadGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /load game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /load game/i }));

      expect(screen.getByText(/load a prevously saved game\./i)).toBeInTheDocument();
    });
  });

  describe('save game', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /save game/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onSaveGameClick={handler} />);

      await user.click(screen.getByRole('button', { name: /save game/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /save game/i }));

      expect(screen.getByText(/save the current game\./i)).toBeInTheDocument();
    });
  });

  describe('quit', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /quit/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onQuitClick={handler} />);

      await user.click(screen.getByRole('button', { name: /quit/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /quit/i }));

      expect(screen.getByText(/quit heroes of might and magic and return to the dos prompt\./i)).toBeInTheDocument();
    });
  });

  describe('music volume', () => {
    it('renders option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /music/i })).toBeInTheDocument();
    });

    it('renders off by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(within(screen.getByRole('option', { name: /music/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('renders off when min volume', () => {
      renderWithProviders(<GameOptionsWindow musicVolume={MinVolume} />);

      expect(within(screen.getByRole('option', { name: /music/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('renders on when max volume', () => {
      renderWithProviders(<GameOptionsWindow musicVolume={MaxVolume} />);

      expect(within(screen.getByRole('option', { name: /music/i })).getByText(/on/i)).toBeInTheDocument();
    });

    it('renders volume when inbetween min and max volume', () => {
      renderWithProviders(<GameOptionsWindow musicVolume={5} />);

      expect(within(screen.getByRole('option', { name: /music/i })).getByText(/volume 5/i)).toBeInTheDocument();
    });

    it('decreases volume when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow musicVolume={5} onMusicVolumeChange={handler} />);

      await user.click(within(screen.getByRole('option', { name: /music/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(4);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /music/i }));

      expect(screen.getByText(/toggle ambient music on\/off/i)).toBeInTheDocument();
    });
  });

  describe('effects volume', () => {
    it('renders option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /effects/i })).toBeInTheDocument();
    });

    it('renders off by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(within(screen.getByRole('option', { name: /effects/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('renders off when min volume', () => {
      renderWithProviders(<GameOptionsWindow effectsVolume={MinVolume} />);

      expect(within(screen.getByRole('option', { name: /effects/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('renders on when max volume', () => {
      renderWithProviders(<GameOptionsWindow effectsVolume={MaxVolume} />);

      expect(within(screen.getByRole('option', { name: /effects/i })).getByText(/on/i)).toBeInTheDocument();
    });

    it('renders volume when inbetween min and max volume', () => {
      renderWithProviders(<GameOptionsWindow effectsVolume={5} />);

      expect(within(screen.getByRole('option', { name: /effects/i })).getByText(/volume 5/i)).toBeInTheDocument();
    });

    it('decreases volume when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow effectsVolume={5} onEffectsVolumeChange={handler} />);

      await user.click(within(screen.getByRole('option', { name: /effects/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(4);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /effects/i }));

      expect(screen.getByText(/toggle foreground sounds on\/off/i)).toBeInTheDocument();
    });
  });

  describe('movement speed', () => {
    it('renders option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /speed/i })).toBeInTheDocument();
    });

    it('renders walk by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(within(screen.getByRole('option', { name: /speed/i })).getByText(/walk/i)).toBeInTheDocument();
    });

    it('renders value', () => {
      renderWithProviders(<GameOptionsWindow movementSpeed={MovementSpeed.Gallop} />);

      expect(within(screen.getByRole('option', { name: /speed/i })).getByText(/gallop/i)).toBeInTheDocument();
    });

    it('increases value when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <GameOptionsWindow movementSpeed={MovementSpeed.Gallop} onMovementSpeedChange={handler} />,
      );

      await user.click(within(screen.getByRole('option', { name: /speed/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(MovementSpeed.Jump);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /speed/i }));

      expect(screen.getByText(/change the speed at which heroes move on the main screen\./i)).toBeInTheDocument();
    });
  });

  describe('auto save', () => {
    it('renders option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /auto save/i })).toBeInTheDocument();
    });

    it('renders off by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(within(screen.getByRole('option', { name: /auto save/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('toggles when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onAutoSaveChange={handler} />);

      await user.click(within(screen.getByRole('option', { name: /auto save/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /auto save/i }));

      expect(
        screen.getByText(
          /toggle 'autosave' on\/off\. 'autosave' saves your game automatically at the end of each turn to a special file, called 'autosave'\./i,
        ),
      ).toBeInTheDocument();
    });
  });

  describe('show path', () => {
    it('renders show path option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /show path/i })).toBeInTheDocument();
    });

    it('renders show path off by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(within(screen.getByRole('option', { name: /show path/i })).getByText(/off/i)).toBeInTheDocument();
    });

    it('toggles when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onShowPathChange={handler} />);

      await user.click(within(screen.getByRole('option', { name: /show path/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /show path/i }));

      expect(
        screen.getByText(
          /toggle 'show path' on\/off\. if 'show path' is on, your first click on a map location will show the path to get there, your second will start you moving\. if this option is off, one click starts you moving immediately\./i,
        ),
      ).toBeInTheDocument();
    });
  });

  describe('view enemy movement', () => {
    it('renders option', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('option', { name: /view enemy movement/i })).toBeInTheDocument();
    });

    it('renders off by default', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(
        within(screen.getByRole('option', { name: /view enemy movement/i })).getByText(/off/i),
      ).toBeInTheDocument();
    });

    it('toggles when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onViewEnemyMovementChange={handler} />);

      await user.click(within(screen.getByRole('option', { name: /view enemy movement/i })).getByRole('checkbox'));

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('checkbox', { name: /view enemy movement/i }));

      expect(
        screen.getByText(
          /toggle 'show enemy moves' on\/off. if on, all enemies moving within your visible area will be shown\. if off, no computer movement will be shown\. note that this option is automatically set to off during network and modem play\./i,
        ),
      ).toBeInTheDocument();
    });
  });

  describe('okay', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onConfirmClick={handler} />);

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /okay/i }));

      expect(screen.getByText(/exit this menu without doing anything\./i)).toBeInTheDocument();
    });
  });

  describe('info', () => {
    it('renders button', () => {
      renderWithProviders(<GameOptionsWindow />);

      expect(screen.getByRole('button', { name: /info/i })).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onInfoClick={handler} />);

      await user.click(screen.getByRole('button', { name: /info/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow />);

      await user.rightDown(screen.getByRole('button', { name: /info/i }));

      expect(screen.getByText(/view information on the scenario you are currently playing\./i)).toBeInTheDocument();
    });
  });
});
