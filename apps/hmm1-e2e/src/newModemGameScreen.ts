import { Locator, Page } from '@playwright/test';

export class NewModemGameScreen {
  public readonly locator: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new modem game screen/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem');
  }
}
