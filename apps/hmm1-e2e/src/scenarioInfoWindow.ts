import type { Locator, Page } from '@playwright/test';

import { Button } from './button';
import { expect } from './utils';
import { Window } from './window';

interface ScenarioInfo {
  readonly difficultyRating: RegExp;
  readonly gameDifficulty: RegExp;
  readonly kingOfTheHill: RegExp;
  readonly opponents: readonly RegExp[];
  readonly playerColor: RegExp;
  readonly scenarioDescription: RegExp;
  readonly scenarioDifficulty: RegExp;
  readonly scenarioName: RegExp;
  readonly scenarioSize: RegExp;
}

export class ScenarioInfoWindow extends Window {
  public readonly scenarioName: Locator;
  public readonly gameDifficulty: Locator;
  public readonly opponents: readonly Locator[];
  public readonly playerColor: Locator;
  public readonly kingOfTheHill: Locator;
  public readonly difficultyRating: Locator;
  public readonly scenarioSize: Locator;
  public readonly scenarioDifficulty: Locator;
  public readonly scenarioDescription: Locator;

  public readonly okay: Button;

  constructor(page: Page) {
    super(page, /^scenario info$/i);

    this.scenarioName = page.getByLabel(/^scenario:$/i);
    this.gameDifficulty = page.getByLabel(/^game setting:$/i);
    this.opponents = [
      page.getByLabel(/^opponent 1:$/i),
      page.getByLabel(/^opponent 2:$/i),
      page.getByLabel(/^opponent 3:$/i),
    ];
    this.playerColor = page.getByLabel(/^color:$/i);
    this.kingOfTheHill = page.getByLabel(/^king of the hill:$/i);
    this.difficultyRating = page.getByLabel(/^rating:$/i);
    this.scenarioSize = page.getByLabel(/^size:$/i);
    this.scenarioDifficulty = page.getByLabel(/^difficulty:$/i);
    this.scenarioDescription = page.getByLabel(/^description:$/i);

    this.okay = new Button(page, /^okay$/i);
  }

  public async verifyInfo({
    difficultyRating,
    gameDifficulty,
    kingOfTheHill,
    opponents,
    playerColor,
    scenarioDescription,
    scenarioDifficulty,
    scenarioName,
    scenarioSize,
  }: ScenarioInfo) {
    await expect(this.scenarioName).toHaveText(scenarioName);
    await expect(this.gameDifficulty).toHaveText(gameDifficulty);
    await Promise.all(
      opponents.map((opponent, opponentIndex) => expect(this.opponents[opponentIndex]).toHaveText(opponent))
    );
    await expect(this.playerColor).toHaveText(playerColor);
    await expect(this.kingOfTheHill).toHaveText(kingOfTheHill);
    await expect(this.difficultyRating).toHaveText(difficultyRating);
    await expect(this.scenarioSize).toHaveText(scenarioSize);
    await expect(this.scenarioDifficulty).toHaveText(scenarioDifficulty);
    await expect(this.scenarioDescription).toHaveText(scenarioDescription);
  }
}
