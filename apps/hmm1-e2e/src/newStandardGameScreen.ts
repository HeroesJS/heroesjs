import type { Page } from '@playwright/test';

import { Button } from './button';
import { Checkbox } from './checkbox';
import { FileSelectorWindow } from './fileSelectorWindow';
import { Input } from './input';
import { LabelledText } from './labelledText';
import { Modal } from './modal';
import { RadioGroup } from './radioGroup';
import { Screen } from './screen';
import { Toggle } from './toggle';
import { ToggleGroup } from './toggleGroup';
import { expect } from './utils';

interface GameSettings {
  readonly gameDifficulty: RegExp;
  readonly opponents: readonly [RegExp, RegExp, RegExp];
  readonly playerColor: RegExp;
  readonly kingOfTheHill: boolean;
  readonly scenario: RegExp;
}

export class NewStandardGameScreen extends Screen {
  public readonly gameDifficulty: RadioGroup;

  public readonly opponents: ToggleGroup;
  public readonly computerOpponentInfo: Modal;
  public readonly humanOpponentInfo: Modal;

  public readonly playerColor: Toggle;
  public readonly kingOfTheHill: Checkbox;

  public readonly selectedScenario: Input;
  public readonly selectScenario: Button;
  public readonly scenarioSelector: FileSelectorWindow;

  public readonly difficultyRating: LabelledText;

  public readonly okay: Button;
  public readonly cancel: Button;

  public readonly noOpponentsError: Modal;

  constructor(page: Page) {
    super(page, /^new standard game$/i);

    this.gameDifficulty = new RadioGroup(
      page,
      /^game difficulty$/i,
      /^change the starting difficulty at which you will play\. higher difficulty levels start you off with fewer resources\.$/i
    );
    this.opponents = new ToggleGroup(page, /^opponent 1 setting$/i, /^opponent 2 setting$/i, /^opponent 3 setting$/i);
    this.computerOpponentInfo = new Modal(
      page,
      /^change the difficulty of this opponent\. smarter computer players are more aggressive and think longer for each turn\.$/i
    );
    this.humanOpponentInfo = new Modal(
      page,
      /^change the starting difficulty of another human player\. higher difficulty levels start you off with fewer resources\.$/i
    );

    this.playerColor = new Toggle(page, /^choose color:$/i, /^change your banner color\.$/i);
    this.kingOfTheHill = new Checkbox(
      page,
      /^king of the hill:$/i,
      /^challenge all computer players as 'king of the hill'\. computer players will be offended by your boastfulness, and lay off each other in an attempt to beat you to a pulp\.$/i
    );

    this.selectedScenario = new Input(page, /^scenario$/i);
    this.selectScenario = new Button(page, /^select scenario$/i, /^select which scenario to play\.$/i);
    this.scenarioSelector = new FileSelectorWindow(page);

    this.difficultyRating = new LabelledText(
      page,
      /^difficulty rating:$/i,
      /^the difficulty rating reflects a combination of various settings for your game. this number will be applied to your final score\.$/i
    );

    this.okay = new Button(page, /^okay$/i, /^accept these settings and start a new game\.$/i);
    this.cancel = new Button(page, /^cancel$/i, /^return to the main menu\.$/i);

    this.noOpponentsError = new Modal(page, /^a game requires at least one opponent\.$/i);
  }

  public goto(playerCount = 1) {
    return this.page.goto(`/new-game/standard/${playerCount}`);
  }

  public async verifyHumanOpponentsCount(count: number) {
    expect(await this.page.getByRole('radio', { name: /^human/i }).count()).toBe(count);
  }

  public async selectGameSettings({ gameDifficulty, kingOfTheHill, opponents, playerColor, scenario }: GameSettings) {
    await this.gameDifficulty.selectOption(gameDifficulty);
    await this.opponents.selectOptions(...opponents);
    await this.playerColor.select(playerColor);
    await this.kingOfTheHill.selectEnabled(kingOfTheHill);

    await this.selectScenario.select();

    await this.scenarioSelector.getItem(scenario).click();

    await this.scenarioSelector.okay.select();
  }

  public async verifyGameSettingsSelected({
    gameDifficulty,
    kingOfTheHill,
    opponents,
    playerColor,
    scenario,
  }: GameSettings) {
    await this.gameDifficulty.verifyOptionSelected(gameDifficulty);
    await this.opponents.verifyOptionsSelected(...opponents);
    await this.playerColor.verifySelected(playerColor);
    await this.kingOfTheHill.verifyEnabled(kingOfTheHill);
    await this.selectedScenario.verifyContent(scenario);
  }
}
