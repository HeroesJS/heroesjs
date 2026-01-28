import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { GameOptionsWindow } from './GameOptionsWindow';
import { MovementSpeed, SoundVolume } from '@heroesjs/hmm1-core';

describe(GameOptionsWindow, () => {
  it('should render', () => {
    renderWithProviders(<GameOptionsWindow open />);

    expect(screen.getByRole('region', { name: /^game options window$/i })).toBeInTheDocument();
  });

  describe('new game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^new game$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^new game$/i }));

      await expect(
        screen.getByRole('dialog', { name: /^start a single or multi‑player game\.$/iu })
      ).toBeInTheDocument();
    });

    it('should render confirmation modal when clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      expect(
        screen.getByRole('dialog', { name: /^are you sure you want to restart\? \(your current game will be lost\)$/i })
      );
    });

    it('should close confirmation modal when no is clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      await user.click(screen.getByRole('button', { name: /^no$/i }));

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should call handler when yes is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onNewGameClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      await user.click(screen.getByRole('button', { name: /^yes$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('load game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^load game$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^load game$/i }));

      expect(screen.getByRole('dialog', { name: /^load a previously saved game\.$/i }));
    });

    it('should render confirmation modal when clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^are you sure you want to load a new game\? \(your current game will be lost\)$/i,
        })
      );
    });

    it('should close confirmation modal when no is clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      await user.click(screen.getByRole('button', { name: /^no$/i }));

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should call handler when yes is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onLoadGameClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      await user.click(screen.getByRole('button', { name: /^yes$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('save game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^save game$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^save game$/i }));

      expect(screen.getByRole('dialog', { name: /^save the current game\.$/i })).toBeInTheDocument();
    });
  });

  describe('quit button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^quit$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^quit$/i }));

      expect(
        screen.getByRole('dialog', { name: /^quit heroes of might and magic and return to the dos prompt\.$/i })
      ).toBeInTheDocument();
    });

    it('should render confirmation modal when clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^quit$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^are you sure you want to quit\? \(your current game will be lost\)$/i,
        })
      );
    });

    it('should close confirmation modal when no is clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^quit$/i }));

      await user.click(screen.getByRole('button', { name: /^no$/i }));

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should call handler when yes is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onQuitClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^quit$/i }));

      await user.click(screen.getByRole('button', { name: /^yes$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('music volume', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('radiogroup', { name: /^music$/i })).toBeInTheDocument();
    });

    it('should render off by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(
        within(screen.getByRole('radiogroup', { name: /^music$/i })).getByRole('radio', { name: /^off$/i })
      ).toBeInTheDocument();
    });

    it('should render on when enabled', () => {
      renderWithProviders(<GameOptionsWindow musicVolume={SoundVolume.On} open />);

      expect(within(screen.getByRole('radiogroup', { name: /^music$/i })).getByRole('radio', { name: /^on$/i }));
    });

    it('should render volume when neither on nor off', () => {
      renderWithProviders(<GameOptionsWindow musicVolume={SoundVolume.Volume5} open />);

      expect(
        within(screen.getByRole('radiogroup', { name: /^music$/i })).getByRole('radio', { name: /^on - volume 5$/i })
      );
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('radiogroup', { name: /^music$/i }));

      expect(screen.getByRole('dialog', { name: /^toggle ambient music on\/off$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onMusicVolumeChange={handler} open />);

      await user.click(screen.getByRole('radiogroup', { name: /^music$/i }));

      expect(handler).toHaveBeenCalledWith<[SoundVolume]>(SoundVolume.On);
    });
  });

  describe('effects volume', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('radiogroup', { name: /^effects$/i })).toBeInTheDocument();
    });

    it('should render off by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(
        within(screen.getByRole('radiogroup', { name: /^effects$/i })).getByRole('radio', { name: /^off$/i })
      ).toBeInTheDocument();
    });

    it('should render on when enabled', () => {
      renderWithProviders(<GameOptionsWindow effectsVolume={SoundVolume.On} open />);

      expect(within(screen.getByRole('radiogroup', { name: /^effects$/i })).getByRole('radio', { name: /^on$/i }));
    });

    it('should render volume when neither on nor off', () => {
      renderWithProviders(<GameOptionsWindow effectsVolume={SoundVolume.Volume5} open />);

      expect(
        within(screen.getByRole('radiogroup', { name: /^effects$/i })).getByRole('radio', { name: /^on - volume 5$/i })
      );
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('radiogroup', { name: /^effects$/i }));

      expect(screen.getByRole('dialog', { name: /^toggle foreground sounds on\/off$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onMusicVolumeChange={handler} open />);

      await user.click(screen.getByRole('radiogroup', { name: /^music$/i }));

      expect(handler).toHaveBeenCalledWith<[SoundVolume]>(SoundVolume.On);
    });
  });

  describe('movement speed', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('radiogroup', { name: /^speed$/i })).toBeInTheDocument();
    });

    it('should be walk by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(
        within(screen.getByRole('radiogroup', { name: /^speed$/i })).getByRole('radio', { name: /walk/i })
      ).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('radiogroup', { name: /^speed$/i }));

      expect(
        screen.getByRole('dialog', { name: /^change the speed at which heroes move on the main screen\.$/i })
      ).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onMovementSpeedChange={handler} open />);

      await user.click(screen.getByRole('radiogroup', { name: /^speed$/i }));

      expect(handler).toHaveBeenCalledWith<[MovementSpeed]>(MovementSpeed.Trot);
    });
  });

  describe('auto save', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^auto save$/i })).toBeInTheDocument();
    });

    it('should be unchecked by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^auto save$/i })).not.toBeChecked();
    });

    it('should be checked when set', () => {
      renderWithProviders(<GameOptionsWindow autoSave open />);

      expect(screen.getByRole('checkbox', { name: /^auto save$/i })).toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('checkbox', { name: /^auto save$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^toggle 'autosave' on\/off\. 'autosave' saves your game automatically at the end of each turn to a special file, called 'autosave'\.$/i,
        })
      ).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onAutoSaveChange={handler} open />);

      await user.click(screen.getByRole('checkbox', { name: /^auto save$/i }));

      expect(handler).toHaveBeenCalledWith<[boolean]>(true);
    });
  });

  describe('show path', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^show path$/i })).toBeInTheDocument();
    });

    it('should be unchecked by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^show path$/i })).not.toBeChecked();
    });

    it('should be checked when set', () => {
      renderWithProviders(<GameOptionsWindow open showPath />);

      expect(screen.getByRole('checkbox', { name: /^show path$/i })).toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('checkbox', { name: /^show path$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^toggle 'show path' on\/off\. if 'show path' is on, your first click on a map location will show the path to get there, your second will start you moving\. if this option is off, one click starts you moving immediately\.$/i,
        })
      ).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onShowPathChange={handler} open />);

      await user.click(screen.getByRole('checkbox', { name: /^show path$/i }));

      expect(handler).toHaveBeenCalledWith<[boolean]>(true);
    });
  });

  describe('view enemy movement', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^view enemy movement$/i })).toBeInTheDocument();
    });

    it('should be unchecked by default', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('checkbox', { name: /^view enemy movement$/i })).not.toBeChecked();
    });

    it('should be checked when set', () => {
      renderWithProviders(<GameOptionsWindow open viewEnemyMovement />);

      expect(screen.getByRole('checkbox', { name: /^view enemy movement$/i })).toBeChecked();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('checkbox', { name: /^view enemy movement$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^toggle 'show enemy moves' on\/off\. if on, all enemies moving within your visible area will be shown\. if off, no computer movement will be shown\. note that this option is automatically set to off during network and modem play\.$/i,
        })
      ).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onViewEnemyMovementChange={handler} open />);

      await user.click(screen.getByRole('checkbox', { name: /^view enemy movement$/i }));

      expect(handler).toHaveBeenCalledWith<[boolean]>(true);
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^okay$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onOkayClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^okay$/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^okay$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^exit this menu without doing anything\.$/i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('info button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^info$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onInfoClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^info$/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^info$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^view information on the scenario you are currently playing\.$/i,
        })
      ).toBeInTheDocument();
    });
  });
});
