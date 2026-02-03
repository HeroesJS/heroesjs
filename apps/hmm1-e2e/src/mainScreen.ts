import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class MainScreen extends Screen {
  public readonly newGame: Button;
  public readonly loadGame: Button;
  public readonly viewHighScores: Button;
  public readonly viewCredits: Button;
  public readonly quit: Button;

  constructor(page: Page) {
    super(page, /^main screen$/i);

    this.newGame = new Button(page, /^new game$/i, /^start a single or multi‑player game\.$/iu);
    this.loadGame = new Button(page, /^load game$/i, /^load a previously saved game\.$/i);
    this.viewHighScores = new Button(page, /^view high scores$/i, /^view the high score screen\.$/i);
    this.viewCredits = new Button(page, /^view credits$/i, /^view the credits screen\.$/i);
    this.quit = new Button(page, /^quit$/i, /^quit heroes of might and magic and return to the dos prompt\.$/i);
  }

  public goto() {
    return this.page.goto('/');
  }
}
