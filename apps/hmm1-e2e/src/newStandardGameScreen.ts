import { expect, type Locator, type Page } from '@playwright/test';

import { FileSelectorWindow } from './fileSelectorWindow';

interface GameSettings {
  readonly gameDifficulty: RegExp;
  readonly opponents: readonly [RegExp, RegExp, RegExp];
  readonly playerColor: RegExp;
  readonly kingOfTheHill: boolean;
  readonly scenario: RegExp;
}

export class NewStandardGameScreen {
  public readonly locator: Locator;

  public readonly window: Locator;

  public readonly gameDifficultyLabel: Locator;
  public readonly gameDifficultyRadioGroup: Locator;
  public readonly gameDifficultyInfoModal: Locator;

  public readonly opponentSettingsLabel: Locator;
  public readonly computerOpponentSettingInfoModal: Locator;
  public readonly humanOpponentSettingInfoModal: Locator;

  public readonly playerColorToggle: Locator;
  public readonly playerColorInfoModal: Locator;

  public readonly kingOfTheHillCheckbox: Locator;
  public readonly kingOfTheHillInfoModal: Locator;

  public readonly scenarioSelectionLabel: Locator;
  public readonly selectedScenarioLabel: Locator;
  public readonly selectScenarioButton: Locator;
  public readonly selectScenarioInfoModal: Locator;

  public readonly difficultyRating: Locator;
  public readonly difficultyRatingInfoModal: Locator;

  public readonly okayButton: Locator;
  public readonly okayInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  public readonly fileSelector: FileSelectorWindow;

  public readonly noOpponentsModal: Locator;

  constructor(private page: Page) {
    this.locator = page.getByRole('main', { name: /new standard game/i });

    this.window = page.getByRole('region', { name: /new standard game/i });

    this.gameDifficultyLabel = page.getByText(/choose game difficulty:/i);
    this.gameDifficultyRadioGroup = page.getByRole('radiogroup', { name: /game difficulty/i });
    this.gameDifficultyInfoModal = page.getByRole('dialog', {
      name: /change the starting difficulty at which you will play\. higher difficulty levels start you off with fewer resources\./i,
    });

    this.opponentSettingsLabel = page.getByText(/customize opponents:/i);
    this.computerOpponentSettingInfoModal = page.getByRole('dialog', {
      name: /change the difficulty of this opponent\. smarter computer players are more aggressive and think longer for each turn\./i,
    });
    this.humanOpponentSettingInfoModal = page.getByRole('dialog', {
      name: /change the starting difficulty of another human player\. higher difficulty levels start you off with fewer resources\./i,
    });

    this.playerColorToggle = this.page.getByRole('radiogroup', { name: /choose color:/i });
    this.playerColorInfoModal = this.page.getByRole('dialog', { name: /change your banner color\./i });

    this.kingOfTheHillCheckbox = page.getByRole('checkbox', { name: /king of the hill:/i });
    this.kingOfTheHillInfoModal = page.getByRole('dialog', {
      name: /challenge all computer players as 'king of the hill'\. computer players will be offended by your boastfulness, and lay off each other in an attempt to beat you to a pulp\./i,
    });

    this.scenarioSelectionLabel = page.getByText(/choose scenario:/i);
    this.selectedScenarioLabel = page.getByRole('textbox', { name: /scenario/i });
    this.selectScenarioButton = page.getByRole('button', { name: /select scenario/i });
    this.selectScenarioInfoModal = page.getByRole('dialog', { name: /select which scenario to play\./i });

    this.difficultyRating = page.getByLabel(/difficulty rating:/i);
    this.difficultyRatingInfoModal = page.getByRole('dialog', {
      name: /the difficulty rating reflects a combination of various settings for your game. this number will be applied to your final score\./i,
    });

    this.okayButton = page.getByRole('button', { name: /okay/i });
    this.okayInfoModal = page.getByRole('dialog', { name: /accept these settings and start a new game\./i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /return to the main menu\./i });

    this.fileSelector = new FileSelectorWindow(page);

    this.noOpponentsModal = page.getByRole('dialog', { name: /a game requires at least one opponent\./i });
  }

  public goto(playerCount = 1) {
    return this.page.goto(`/new-game/standard/${playerCount}`);
  }

  public getGameDifficultyRadio(option: RegExp) {
    return this.gameDifficultyRadioGroup.getByRole('radio', { name: option });
  }

  public async selectGameDifficulty(value: RegExp) {
    await this.getGameDifficultyRadio(value).click();
  }

  public async verifyGameDifficulty(value: RegExp) {
    await expect(this.getGameDifficultyRadio(value)).toBeChecked();
  }

  public getOpponentSetting(opponentNumber: number) {
    return this.page.getByRole('radiogroup', { name: RegExp(`opponent ${opponentNumber} setting`, 'i') });
  }

  public getOpponentSettingOption(opponentNumber: number, setting: RegExp) {
    return this.getOpponentSetting(opponentNumber).getByRole('radio', { name: setting });
  }

  public async setOpponent(opponentNumber: number, value: RegExp) {
    while (!(await this.getOpponentSettingOption(opponentNumber, value).isVisible())) {
      await this.getOpponentSetting(opponentNumber).click();
    }
  }

  public async setOpponents(...opponents: readonly [RegExp, RegExp, RegExp]) {
    await Promise.all(
      Array.from(opponents.entries()).map(([opponentNumber, value]) => this.setOpponent(opponentNumber + 1, value))
    );
  }

  public async verifyOpponent(opponentNumber: number, value: RegExp) {
    await expect(this.getOpponentSettingOption(opponentNumber, value)).toBeVisible();
  }

  public async verifyOpponents(...opponents: readonly [RegExp, RegExp, RegExp]) {
    await Promise.all(
      Array.from(opponents.entries()).map(([opponentNumber, value]) => this.verifyOpponent(opponentNumber + 1, value))
    );
  }

  public getHumanOpponentsCount() {
    return this.page.getByRole('radio', { name: /human/i }).count();
  }

  public getPlayerColorOption(option: RegExp) {
    return this.playerColorToggle.getByRole('radio', { name: option });
  }

  public async selectPlayerColor(value: RegExp) {
    while (!(await this.getPlayerColorOption(value).isVisible())) {
      await this.playerColorToggle.click();
    }
  }

  public async verifyPlayerColor(value: RegExp) {
    await expect(this.getPlayerColorOption(value)).toBeChecked();
  }

  public getKingOfTheHill() {
    return this.kingOfTheHillCheckbox.isChecked();
  }

  public async setKingOfTheHill(value: boolean) {
    if ((await this.kingOfTheHillCheckbox.isChecked()) !== value) {
      await this.kingOfTheHillCheckbox.click();
    }
  }

  public async verifyKingOfTheHill(value: boolean) {
    await expect(this.kingOfTheHillCheckbox).toBeChecked({ checked: value });
  }

  public async selectScenario(name: RegExp) {
    await this.selectScenarioButton.click();

    await this.fileSelector.getItem(name).click();

    await this.fileSelector.okayButton.click();
  }

  public async verifySelectedScenario(name: RegExp) {
    await expect(this.selectedScenarioLabel).toHaveText(name);
  }

  public async selectGameSettings({ gameDifficulty, kingOfTheHill, opponents, playerColor, scenario }: GameSettings) {
    await this.selectGameDifficulty(gameDifficulty);
    await this.setOpponents(...opponents);
    await this.selectPlayerColor(playerColor);
    await this.setKingOfTheHill(kingOfTheHill);
    await this.selectScenario(scenario);
  }

  public async verifyGameSettings({ gameDifficulty, kingOfTheHill, opponents, playerColor, scenario }: GameSettings) {
    await this.verifyGameDifficulty(gameDifficulty);
    await this.verifyOpponents(...opponents);
    await this.verifyPlayerColor(playerColor);
    await this.verifyKingOfTheHill(kingOfTheHill);
    await this.verifySelectedScenario(scenario);
  }
}
