import type { Locator, Page } from '@playwright/test';

export class GameOptionsWindow {
  public readonly locator: Locator;

  public readonly newGameButton: Locator;
  public readonly newGameConfirmationModal: Locator;

  public readonly loadGameButton: Locator;
  public readonly loadGameConfirmationModal: Locator;

  public readonly saveGameButton: Locator;

  public readonly quitButton: Locator;
  public readonly quitConfirmationModal: Locator;

  public readonly musicVolumeToggle: Locator;

  public readonly effectsVolumeToggle: Locator;

  public readonly movementSpeedToggle: Locator;

  public readonly autoSaveCheckbox: Locator;

  public readonly showPathCheckbox: Locator;

  public readonly viewEnemyMovementCheckbox: Locator;

  public readonly okayButton: Locator;
  public readonly infoButton: Locator;

  public readonly yesButton: Locator;
  public readonly noButton: Locator;

  constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^game options window$/i });

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.newGameConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to restart\? \(your current game will be lost\)$/i,
    });

    this.loadGameButton = page.getByRole('button', { name: /^load game$/i });
    this.loadGameConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to load a new game\? \(your current game will be lost\)$/i,
    });

    this.saveGameButton = page.getByRole('button', { name: /^save game$/i });

    this.quitButton = page.getByRole('button', { name: /^quit$/i });
    this.quitConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to quit\? \(your current game will be lost\)$/i,
    });

    this.musicVolumeToggle = page.getByRole('radiogroup', { name: /^music$/i });

    this.effectsVolumeToggle = page.getByRole('radiogroup', { name: /^effects$/i });

    this.movementSpeedToggle = page.getByRole('radiogroup', { name: /^speed$/i });

    this.autoSaveCheckbox = page.getByRole('checkbox', { name: /auto save/i });

    this.showPathCheckbox = page.getByRole('checkbox', { name: /^show path$/i });

    this.viewEnemyMovementCheckbox = page.getByRole('checkbox', { name: /^view enemy movement$/i });

    this.okayButton = page.getByRole('button', { name: /^okay$/i });
    this.infoButton = page.getByRole('button', { name: /^info$/i });

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
