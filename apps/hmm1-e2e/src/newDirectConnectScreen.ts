import type { Locator, Page } from '@playwright/test';

export class NewDirectConnectGameScreen {
  public readonly locator: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new direct connect game screen/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect');
  }
}
