import type { Locator, Page } from '@playwright/test';

import { FileSelectorWindow } from './fileSelectorWindow';

export class NewStandardGameScreen {
  public readonly locator: Locator;

  public readonly window: Locator;

  public readonly gameDifficultyLabel: Locator;
  public readonly gameDifficultyRadioGroup: Locator;
  public readonly gameDifficultyInfoModal: Locator;

  public readonly opponentSettingsLabel: Locator;
  public readonly computerOpponentSettingInfoModal: Locator;
  public readonly humanOpponentSettingInfoModal: Locator;

  public readonly playerColor: Locator;
  public readonly playerColorInfoModal: Locator;

  public readonly kingOfTheHillCheckbox: Locator;
  public readonly kingOfTheHillInfoModal: Locator;

  public readonly scenarioSelectionLabel: Locator;
  public readonly scenarioLabel: Locator;
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

    this.playerColor = this.page.getByRole('radiogroup', { name: /choose color:/i });
    this.playerColorInfoModal = this.page.getByRole('dialog', { name: /change your banner color\./i });

    this.kingOfTheHillCheckbox = page.getByRole('checkbox', { name: /king of the hill:/i });
    this.kingOfTheHillInfoModal = page.getByRole('dialog', {
      name: /challenge all computer players as 'king of the hill'\. computer players will be offended by your boastfulness, and lay off each other in an attempt to beat you to a pulp\./i,
    });

    this.scenarioSelectionLabel = page.getByText(/choose scenario:/i);
    this.scenarioLabel = page.getByRole('textbox', { name: /scenario/i });
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

  public getOpponentSetting(index: number) {
    return this.page.getByRole('radiogroup', { name: RegExp(`opponent ${index} setting`, 'i') });
  }

  public getOpponentSettingOption(index: number, setting: RegExp) {
    return this.getOpponentSetting(index).getByRole('radio', { name: setting });
  }

  public getHumanOpponentsCount() {
    return this.page.getByRole('radio', { name: /human/i }).count();
  }

  public getPlayerColorOption(option: RegExp) {
    return this.playerColor.getByRole('radio', { name: option });
  }
}
