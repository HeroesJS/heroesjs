import type { Locator, Page } from '@playwright/test';

export class GameOptionsWindow {
  public readonly locator: Locator;

  public readonly newGameButton: Locator;
  public readonly newGameInfoModal: Locator;
  public readonly newGameConfirmationModal: Locator;

  public readonly loadGameButton: Locator;
  public readonly loadGameInfoModal: Locator;
  public readonly loadGameConfirmationModal: Locator;

  public readonly saveGameButton: Locator;
  public readonly saveGameInfoModal: Locator;

  public readonly quitButton: Locator;
  public readonly quitInfoModal: Locator;
  public readonly quitConfirmationModal: Locator;

  public readonly musicVolumeToggle: Locator;
  public readonly musicVolumeInfoModal: Locator;

  public readonly effectsVolumeToggle: Locator;
  public readonly effectsVolumeInfoModal: Locator;

  public readonly movementSpeedToggle: Locator;
  public readonly movementSpeedInfoModal: Locator;

  public readonly autoSaveCheckbox: Locator;
  public readonly autoSaveInfoModal: Locator;

  public readonly showPathCheckbox: Locator;
  public readonly showPathInfoModal: Locator;

  public readonly viewEnemyMovementCheckbox: Locator;
  public readonly viewEnemyMovementInfoModal: Locator;

  public readonly okayButton: Locator;
  public readonly okayInfoModal: Locator;

  public readonly infoButton: Locator;
  public readonly infoInfoModal: Locator;

  public readonly yesButton: Locator;
  public readonly noButton: Locator;

  constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^game options window$/i });

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.newGameInfoModal = page.getByRole('dialog', { name: /^start a single or multi\u{02011}player game\.$/iu });
    this.newGameConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to restart\? \(your current game will be lost\)$/i,
    });

    this.loadGameButton = page.getByRole('button', { name: /^load game$/i });
    this.loadGameInfoModal = page.getByRole('dialog', { name: /^load a previously saved game\.$/i });
    this.loadGameConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to load a new game\? \(your current game will be lost\)$/i,
    });

    this.saveGameButton = page.getByRole('button', { name: /^save game$/i });
    this.saveGameInfoModal = page.getByRole('dialog', { name: /^save the current game\.$/i });

    this.quitButton = page.getByRole('button', { name: /^quit$/i });
    this.quitInfoModal = page.getByRole('dialog', {
      name: /^quit heroes of might and magic and return to the dos prompt\.$/i,
    });
    this.quitConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to quit\? \(your current game will be lost\)$/i,
    });

    this.musicVolumeToggle = page.getByRole('radiogroup', { name: /^music$/i });
    this.musicVolumeInfoModal = page.getByRole('dialog', { name: /^toggle ambient music on\/off$/i });

    this.effectsVolumeToggle = page.getByRole('radiogroup', { name: /^effects$/i });
    this.effectsVolumeInfoModal = page.getByRole('dialog', { name: /^toggle foreground sounds on\/off$/i });

    this.movementSpeedToggle = page.getByRole('radiogroup', { name: /^speed$/i });
    this.movementSpeedInfoModal = page.getByRole('dialog', {
      name: /^change the speed at which heroes move on the main screen\.$/i,
    });

    this.autoSaveCheckbox = page.getByRole('checkbox', { name: /auto save/i });
    this.autoSaveInfoModal = page.getByRole('dialog', {
      name: /^toggle 'autosave' on\/off\. 'autosave' saves your game automatically at the end of each turn to a special file, called 'autosave'\.$/i,
    });

    this.showPathCheckbox = page.getByRole('checkbox', { name: /^show path$/i });
    this.showPathInfoModal = page.getByRole('dialog', {
      name: /^toggle 'show path' on\/off\. if 'show path' is on, your first click on a map location will show the path to get there, your second will start you moving. If this option is off, one click starts you moving immediately\.$/i,
    });

    this.viewEnemyMovementCheckbox = page.getByRole('checkbox', { name: /^view enemy movement$/i });
    this.viewEnemyMovementInfoModal = page.getByRole('dialog', {
      name: /^toggle 'show enemy moves' on\/off\. if on, all enemies moving within your visible area will be shown\. if off, no computer movement will be shown\. note that this option is automatically set to off during network and modem play\.$/i,
    });

    this.okayButton = page.getByRole('button', { name: /^okay$/i });
    this.okayInfoModal = page.getByRole('dialog', { name: /^exit this menu without doing anything\.$/i });

    this.infoButton = page.getByRole('button', { name: /^info$/i });
    this.infoInfoModal = page.getByRole('dialog', {
      name: /^view information on the scenario you are currently playing\.$/i,
    });

    this.yesButton = page.getByRole('button', { name: /^yes$/i });
    this.noButton = page.getByRole('button', { name: /^no$/i });
  }

  public getMusicVolumeOption(name: RegExp) {
    return this.musicVolumeToggle.getByRole('radio', { name });
  }

  public getEffectsVolumeOption(name: RegExp) {
    return this.effectsVolumeToggle.getByRole('radio', { name });
  }

  public getMovementSpeedOption(name: RegExp) {
    return this.movementSpeedToggle.getByRole('radio', { name });
  }
}
