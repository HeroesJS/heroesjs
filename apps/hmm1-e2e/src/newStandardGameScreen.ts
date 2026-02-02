import type { Locator, Page } from '@playwright/test';

import { FileSelectorWindow } from './fileSelectorWindow';
import { Screen } from './screen';
import { expect } from './utils';

interface GameSettings {
  readonly gameDifficulty: RegExp;
  readonly opponents: readonly [RegExp, RegExp, RegExp];
  readonly playerColor: RegExp;
  readonly kingOfTheHill: boolean;
  readonly scenario: RegExp;
}

export class NewStandardGameScreen extends Screen {
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

  constructor(page: Page) {
    super(page, /new standard game/i);

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

  public async verifyGameDifficultySelected(value: RegExp) {
    await expect(this.getGameDifficultyRadio(value)).toBeChecked();
  }

  public async openGameDifficultyInfo() {
    await this.mouseRightDown(this.gameDifficultyRadioGroup);
  }

  public async verifyGameDifficultyInfoOpen() {
    await expect(this.gameDifficultyInfoModal).toBeVisible();
  }

  public getOpponentSetting(opponentNumber: number) {
    return this.page.getByRole('radiogroup', { name: RegExp(`opponent ${opponentNumber} setting`, 'i') });
  }

  public getOpponentSettingOption(opponentNumber: number, setting: RegExp) {
    return this.getOpponentSetting(opponentNumber).getByRole('radio', { name: setting });
  }

  public async selectOpponent(opponentNumber: number, value: RegExp) {
    while (!(await this.getOpponentSettingOption(opponentNumber, value).isVisible())) {
      await this.getOpponentSetting(opponentNumber).click();
    }
  }

  public async selectOpponents(...opponents: readonly [RegExp, RegExp, RegExp]) {
    await Promise.all(
      Array.from(opponents.entries()).map(([opponentNumber, value]) => this.selectOpponent(opponentNumber + 1, value))
    );
  }

  public async verifyOpponentSelected(opponentNumber: number, value: RegExp) {
    await expect(this.getOpponentSettingOption(opponentNumber, value)).toBeVisible();
  }

  public async verifyOpponentsSelected(...opponents: readonly [RegExp, RegExp, RegExp]) {
    await Promise.all(
      Array.from(opponents.entries()).map(([opponentNumber, value]) =>
        this.verifyOpponentSelected(opponentNumber + 1, value)
      )
    );
  }

  public async openOpponentInfo(opponentNumber: number) {
    await this.mouseRightDown(this.getOpponentSetting(opponentNumber));
  }

  public async verifyComputerOpponentInfoOpen() {
    await expect(this.computerOpponentSettingInfoModal).toBeVisible();
  }

  public async verifyHumanOpponentInfoOpen() {
    await expect(this.humanOpponentSettingInfoModal).toBeVisible();
  }

  public async verifyHumanOpponentsCount(count: number) {
    expect(await this.page.getByRole('radio', { name: /^human/i }).count()).toBe(count);
  }

  public getPlayerColorOption(option: RegExp) {
    return this.playerColorToggle.getByRole('radio', { name: option });
  }

  public async selectPlayerColor(value: RegExp) {
    while (!(await this.getPlayerColorOption(value).isVisible())) {
      await this.playerColorToggle.click();
    }
  }

  public async verifyPlayerColorSelected(value: RegExp) {
    await expect(this.getPlayerColorOption(value)).toBeChecked();
  }

  public async openPlayerColorInfo() {
    await this.mouseRightDown(this.playerColorToggle);
  }

  public async verifyPlayerColorInfoOpen() {
    await expect(this.playerColorInfoModal).toBeVisible();
  }

  public getKingOfTheHill() {
    return this.kingOfTheHillCheckbox.isChecked();
  }

  public async selectKingOfTheHill(value: boolean) {
    if ((await this.kingOfTheHillCheckbox.isChecked()) !== value) {
      await this.kingOfTheHillCheckbox.click();
    }
  }

  public async verifyKingOfTheHill(value: boolean) {
    await expect(this.kingOfTheHillCheckbox).toBeChecked({ checked: value });
  }

  public async openKingOfTheHillInfo() {
    await this.mouseRightDown(this.kingOfTheHillCheckbox);
  }

  public async verifyKingOfTheHillInfoOpen() {
    await expect(this.kingOfTheHillInfoModal).toBeVisible();
  }

  public async openScenarioSelection() {
    await this.selectScenarioButton.click();
  }

  public async verifyScenarioSelectionOpen() {
    await expect(this.fileSelector.locator).toBeVisible();
  }

  public async pickScenario(name: RegExp) {
    await this.fileSelector.getItem(name).click();
  }

  public async cancelScenarioSelection() {
    await this.fileSelector.cancelButton.click();
  }

  public async selectScenario(name: RegExp) {
    await this.openScenarioSelection();

    await this.fileSelector.getItem(name).click();

    await this.fileSelector.okayButton.click();
  }

  public async verifyScenarioSelected(name: RegExp) {
    await expect(this.selectedScenarioLabel).toHaveText(name);
  }

  public async openScenarioSelectionInfo() {
    await this.mouseRightDown(this.selectScenarioButton);
  }

  public async verifyScenarioSelectionInfoOpen() {
    await expect(this.selectScenarioInfoModal).toBeVisible();
  }

  public async verifyDifficultyRatingDisplayed(value: RegExp) {
    await expect(this.difficultyRating).toHaveText(value);
  }

  public async openDifficultyRatingInfo() {
    await this.mouseRightDown(this.difficultyRating);
  }

  public async verifyDifficultyRatingInfoOpen() {
    await expect(this.difficultyRatingInfoModal).toBeVisible();
  }

  public async selectGameSettings({ gameDifficulty, kingOfTheHill, opponents, playerColor, scenario }: GameSettings) {
    await this.selectGameDifficulty(gameDifficulty);
    await this.selectOpponents(...opponents);
    await this.selectPlayerColor(playerColor);
    await this.selectKingOfTheHill(kingOfTheHill);
    await this.selectScenario(scenario);
  }

  public async verifyGameSettingsSelected({
    gameDifficulty,
    kingOfTheHill,
    opponents,
    playerColor,
    scenario,
  }: GameSettings) {
    await this.verifyGameDifficultySelected(gameDifficulty);
    await this.verifyOpponentsSelected(...opponents);
    await this.verifyPlayerColorSelected(playerColor);
    await this.verifyKingOfTheHill(kingOfTheHill);
    await this.verifyScenarioSelected(scenario);
  }

  public async cancel() {
    await this.cancelButton.click();
  }

  public async openCancelInfo() {
    await this.mouseRightDown(this.cancelButton);
  }

  public async verifyCancelInfoOpen() {
    await expect(this.cancelInfoModal).toBeVisible();
  }

  public async start() {
    await this.okayButton.click();
  }

  public async openStartInfo() {
    await this.mouseRightDown(this.okayButton);
  }

  public async verifyStartInfoOpen() {
    await expect(this.okayInfoModal).toBeVisible();
  }

  public async verifyNoOpponentsErrorDisplayed() {
    await expect(this.noOpponentsModal).toBeVisible();
  }
}
