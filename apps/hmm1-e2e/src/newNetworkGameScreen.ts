import type { Locator, Page } from '@playwright/test';

export class NewNetworkGameScreen {
  public readonly locator: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new network game screen/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/network');
  }
}
