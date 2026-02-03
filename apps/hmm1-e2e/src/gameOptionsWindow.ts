import type { Locator, Page } from '@playwright/test';

import { Window } from './window';
import { expect } from './utils';

export class GameOptionsWindow extends Window {
  private readonly newGameButton: Locator;
  private readonly newGameInfoModal: Locator;
  private readonly newGameConfirmationModal: Locator;

  private readonly loadGameButton: Locator;
  private readonly loadGameInfoModal: Locator;
  private readonly loadGameConfirmationModal: Locator;

  private readonly saveGameButton: Locator;
  private readonly saveGameInfoModal: Locator;

  private readonly quitButton: Locator;
  private readonly quitInfoModal: Locator;
  private readonly quitConfirmationModal: Locator;

  private readonly musicVolumeToggle: Locator;
  private readonly musicVolumeInfoModal: Locator;

  private readonly effectsVolumeToggle: Locator;
  private readonly effectsVolumeInfoModal: Locator;

  private readonly movementSpeedToggle: Locator;
  private readonly movementSpeedInfoModal: Locator;

  private readonly autoSaveCheckbox: Locator;
  private readonly autoSaveInfoModal: Locator;

  private readonly showPathCheckbox: Locator;
  private readonly showPathInfoModal: Locator;

  private readonly viewEnemyMovementCheckbox: Locator;
  private readonly viewEnemyMovementInfoModal: Locator;

  private readonly okayButton: Locator;
  private readonly okayInfoModal: Locator;

  private readonly infoButton: Locator;
  private readonly infoInfoModal: Locator;

  private readonly yesButton: Locator;
  private readonly noButton: Locator;

  constructor(page: Page) {
    super(page, /^game options window$/i);

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.newGameInfoModal = page.getByRole('dialog', { name: /^start a single or multi‑player game\.$/iu });
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

    this.yesButton = page.getByRole('button', { name: /^yes$/i });
    this.noButton = page.getByRole('button', { name: /^no$/i });

    this.musicVolumeToggle = page.getByRole('radiogroup', { name: /^music$/i });
    this.musicVolumeInfoModal = page.getByRole('dialog', { name: /^toggle ambient music on\/off$/i });

    this.effectsVolumeToggle = page.getByRole('radiogroup', { name: /^effects$/i });
    this.effectsVolumeInfoModal = page.getByRole('dialog', { name: /^toggle foreground sounds on\/off$/i });

    this.movementSpeedToggle = page.getByRole('radiogroup', { name: /^speed$/i });
    this.movementSpeedInfoModal = page.getByRole('dialog', {
      name: /^change the speed at which heroes move on the main screen\.$/i,
    });

    this.autoSaveCheckbox = page.getByRole('checkbox', { name: /^auto save$/i });
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
  }

  public async showNewGameInfo() {
    await this.mouseRightDown(this.newGameButton);
  }

  public async verifyNewGameInfoShown() {
    await expect(this.newGameInfoModal).toBeVisible();
  }

  public async selectNewGame() {
    await this.newGameButton.click();
  }

  public async verifyNewGameConfirmationShown() {
    await expect(this.newGameConfirmationModal).toBeVisible();
  }

  public async verifyNewGameConfirmationHidden() {
    await expect(this.newGameConfirmationModal).toBeHidden();
  }

  public async showLoadGameInfo() {
    await this.mouseRightDown(this.loadGameButton);
  }

  public async verifyLoadGameInfoShown() {
    await expect(this.loadGameInfoModal).toBeVisible();
  }

  public async selectLoadGame() {
    await this.loadGameButton.click();
  }

  public async verifyLoadGameConfirmationShown() {
    await expect(this.loadGameConfirmationModal).toBeVisible();
  }

  public async verifyLoadGameConfirmationHidden() {
    await expect(this.loadGameConfirmationModal).toBeHidden();
  }

  public async showSaveGameInfo() {
    await this.mouseRightDown(this.saveGameButton);
  }

  public async verifySaveGameInfoShown() {
    await expect(this.saveGameInfoModal).toBeVisible();
  }

  public async selectSaveGame() {
    await this.saveGameButton.click();
  }

  public async showQuitInfo() {
    await this.mouseRightDown(this.quitButton);
  }

  public async verifyQuitInfoShown() {
    await expect(this.quitInfoModal).toBeVisible();
  }

  public async selectQuit() {
    await this.quitButton.click();
  }

  public async verifyQuitConfirmationShown() {
    await expect(this.quitConfirmationModal).toBeVisible();
  }

  public async verifyQuitConfirmationHidden() {
    await expect(this.quitConfirmationModal).toBeHidden();
  }

  public async selectNo() {
    await this.noButton.click();
  }

  public async selectYes() {
    await this.yesButton.click();
  }

  public async showMusicVolumeInfo() {
    await this.mouseRightDown(this.musicVolumeToggle);
  }

  public async selectMusicVolume(value: RegExp) {
    while (!(await this.getMusicVolumeOption(value).isVisible())) {
      await this.musicVolumeToggle.click();
    }
  }

  public async verifyMusicVolumeInfoShown() {
    await expect(this.musicVolumeInfoModal).toBeVisible();
  }

  public async verifyMusicVolumeSelected(value: RegExp) {
    await expect(this.getMusicVolumeOption(value)).toBeChecked();
  }

  public async showEffectsVolumeInfo() {
    await this.mouseRightDown(this.effectsVolumeToggle);
  }

  public async verifyEffectsVolumeInfoShown() {
    await expect(this.effectsVolumeInfoModal).toBeVisible();
  }

  public async selectEffectsVolume(value: RegExp) {
    while (!(await this.getEffectsVolumeOption(value).isVisible())) {
      await this.effectsVolumeToggle.click();
    }
  }

  public async verifyEffectsVolumeSelected(value: RegExp) {
    await expect(this.getEffectsVolumeOption(value)).toBeChecked();
  }

  public async showMovementSpeedInfo() {
    await this.mouseRightDown(this.movementSpeedToggle);
  }

  public async verifyMovementSpeedInfoShown() {
    await expect(this.movementSpeedInfoModal).toBeVisible();
  }

  public async selectMovementSpeed(value: RegExp) {
    while (!(await this.getMovementSpeedOption(value).isVisible())) {
      await this.movementSpeedToggle.click();
    }
  }

  public async verifyMovementSpeedSelected(value: RegExp) {
    await expect(this.getMovementSpeedOption(value)).toBeChecked();
  }

  public async showAutoSaveInfo() {
    await this.mouseRightDown(this.autoSaveCheckbox);
  }

  public async verifyAutoSaveInfoShown() {
    await expect(this.autoSaveInfoModal).toBeVisible();
  }

  public async selectAutoSave(enabled: boolean) {
    if ((await this.autoSaveCheckbox.isChecked()) !== enabled) {
      await this.autoSaveCheckbox.click();
    }
  }

  public async verifyAutoSave(enabled: boolean) {
    await expect(this.autoSaveCheckbox).toBeChecked({ checked: enabled });
  }

  public async showShowPathInfo() {
    await this.mouseRightDown(this.showPathCheckbox);
  }

  public async verifyShowPathInfoShown() {
    await expect(this.showPathInfoModal).toBeVisible();
  }

  public async selectShowPath(enabled: boolean) {
    if ((await this.showPathCheckbox.isChecked()) !== enabled) {
      await this.showPathCheckbox.click();
    }
  }

  public async verifyShowPath(enabled: boolean) {
    await expect(this.showPathCheckbox).toBeChecked({ checked: enabled });
  }

  public async showViewEnemyMovementInfo() {
    await this.mouseRightDown(this.viewEnemyMovementCheckbox);
  }

  public async verifyViewEnemyMovementInfoShown() {
    await expect(this.viewEnemyMovementInfoModal).toBeVisible();
  }

  public async selectViewEnemyMovement(enabled: boolean) {
    if ((await this.viewEnemyMovementCheckbox.isChecked()) !== enabled) {
      await this.viewEnemyMovementCheckbox.click();
    }
  }

  public async verifyViewEnemyMovement(enabled: boolean) {
    await expect(this.viewEnemyMovementCheckbox).toBeChecked({ checked: enabled });
  }

  public async showOkayInfo() {
    await this.mouseRightDown(this.okayButton);
  }

  public async verifyOkayInfoShown() {
    await expect(this.okayInfoModal).toBeVisible();
  }

  public async selectOkay() {
    await this.okayButton.click();
  }

  public async showInfoInfo() {
    await this.mouseRightDown(this.infoButton);
  }

  public async verifyInfoInfoShown() {
    await expect(this.infoInfoModal).toBeVisible();
  }

  private getMusicVolumeOption(name: RegExp) {
    return this.musicVolumeToggle.getByRole('radio', { name });
  }

  private getEffectsVolumeOption(name: RegExp) {
    return this.effectsVolumeToggle.getByRole('radio', { name });
  }

  private getMovementSpeedOption(name: RegExp) {
    return this.movementSpeedToggle.getByRole('radio', { name });
  }
}
