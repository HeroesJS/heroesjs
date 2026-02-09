import type { Page } from '@playwright/test';

import { AdventureOptionsWindow } from './adventureOptionsWindow';
import { Button } from './button';
import { GameOptionsWindow } from './gameOptionsWindow';
import { ScenarioInfoWindow } from './scenarioInfoWindow';
import { Screen } from './screen';

export class AdventureScreen extends Screen {
  public readonly actions: AdventureActions;

  public readonly adventureOptions: AdventureOptionsWindow;
  public readonly gameOptions: GameOptionsWindow;
  public readonly scenarioInfo: ScenarioInfoWindow;

  public constructor(page: Page) {
    super(page, /^adventure screen$/i);

    this.actions = new AdventureActions(page);

    this.adventureOptions = new AdventureOptionsWindow(page);
    this.gameOptions = new GameOptionsWindow(page);
    this.scenarioInfo = new ScenarioInfoWindow(page);
  }

  public async goto() {
    return this.page.goto('/adventure');
  }

  public async startNewGame() {
    await this.actions.gameOptions.select();

    await this.gameOptions.newGame.select();

    await this.gameOptions.newGameConfirmation.selectConfirm();
  }
}

class AdventureActions {
  public readonly nextHero: Button;
  public readonly move: Button;
  public readonly kingdomOverview: Button;
  public readonly endTurn: Button;
  public readonly adventureOptions: Button;
  public readonly gameOptions: Button;

  constructor(page: Page) {
    this.nextHero = new Button(page, /^next hero$/i, /^next hero select the next hero\.$/i);
    this.move = new Button(
      page,
      /^move$/i,
      /^continue movement continue the hero's movement along his current path\.$/i
    );
    this.kingdomOverview = new Button(
      page,
      /^kingdom overview$/i,
      /^kingdom summary view a summary of your kingdom\.$/i
    );
    this.endTurn = new Button(page, /^end turn$/i, /^end turn end your turn and let the computer take its turn\.$/i);
    this.adventureOptions = new Button(
      page,
      /^adventure options$/i,
      /^adventure options bring up the adventure options menu\.$/i
    );
    this.gameOptions = new Button(page, /^game options$/i, /^game options bring up the game options menu\.$/i);
  }
}
