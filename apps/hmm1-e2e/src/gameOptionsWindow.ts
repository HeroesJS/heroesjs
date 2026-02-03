import type { Page } from '@playwright/test';

import { Button } from './button';
import { Checkbox } from './checkbox';
import { Modal } from './modal';
import { Toggle } from './toggle';
import { Window } from './window';

export class GameOptionsWindow extends Window {
  public readonly newGame: Button;
  public readonly newGameConfirmation: Modal;

  public readonly loadGame: Button;
  public readonly loadGameConfirmation: Modal;

  public readonly saveGame: Button;

  public readonly quit: Button;
  public readonly quitConfirmation: Modal;

  public readonly musicVolume: Toggle;
  public readonly effectsVolume: Toggle;
  public readonly movementSpeed: Toggle;

  public readonly autoSave: Checkbox;
  public readonly showPath: Checkbox;
  public readonly viewEnemyMovement: Checkbox;

  public readonly okay: Button;
  public readonly info: Button;

  constructor(page: Page) {
    super(page, /^game options window$/i);

    this.newGame = new Button(page, /^new game$/i, /^start a single or multi‑player game\.$/iu);
    this.newGameConfirmation = new Modal(
      page,
      /^are you sure you want to restart\? \(your current game will be lost\)$/i
    );

    this.loadGame = new Button(page, /^load game$/i, /^load a previously saved game\.$/i);
    this.loadGameConfirmation = new Modal(
      page,
      /^are you sure you want to load a new game\? \(your current game will be lost\)$/i
    );

    this.saveGame = new Button(page, /^save game$/i, /^save the current game\.$/i);

    this.quit = new Button(page, /^quit$/i, /^quit heroes of might and magic and return to the dos prompt\.$/i);
    this.quitConfirmation = new Modal(page, /^are you sure you want to quit\? \(your current game will be lost\)$/i);

    this.musicVolume = new Toggle(page, /^music$/i, /^toggle ambient music on\/off$/i);
    this.effectsVolume = new Toggle(page, /^effects$/i, /^toggle foreground sounds on\/off$/i);
    this.movementSpeed = new Toggle(page, /^speed$/i, /^change the speed at which heroes move on the main screen\.$/i);

    this.autoSave = new Checkbox(
      page,
      /^auto save$/i,
      /^toggle 'autosave' on\/off\. 'autosave' saves your game automatically at the end of each turn to a special file, called 'autosave'\.$/i
    );
    this.showPath = new Checkbox(
      page,
      /^show path$/i,
      /^toggle 'show path' on\/off\. if 'show path' is on, your first click on a map location will show the path to get there, your second will start you moving. If this option is off, one click starts you moving immediately\.$/i
    );
    this.viewEnemyMovement = new Checkbox(
      page,
      /^view enemy movement$/i,
      /^toggle 'show enemy moves' on\/off\. if on, all enemies moving within your visible area will be shown\. if off, no computer movement will be shown\. note that this option is automatically set to off during network and modem play\.$/i
    );

    this.okay = new Button(page, /^okay$/i, /^exit this menu without doing anything\.$/i);
    this.info = new Button(page, /^info$/i, /^view information on the scenario you are currently playing\.$/i);
  }
}
