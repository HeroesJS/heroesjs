import type { Page } from '@playwright/test';

import { Screen } from './screen';

export class LoadGameScreen extends Screen {
  public constructor(page: Page) {
    super(page, /^load game screen$/i);
  }

  public goto() {
    return this.page.goto('/load-game');
  }
}
