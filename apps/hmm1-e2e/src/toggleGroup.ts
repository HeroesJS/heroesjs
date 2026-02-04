import type { Page } from '@playwright/test';

import { Toggle } from './toggle';

export class ToggleGroup {
  private readonly toggles: readonly Toggle[];

  public constructor(page: Page, ...names: readonly RegExp[]) {
    this.toggles = names.map((name) => new Toggle(page, name));
  }

  public async showOptionInfo(index: number) {
    await this.toggles[index].showInfo();
  }

  public async selectOption(index: number, value: RegExp) {
    await this.toggles[index].select(value);
  }

  public async verifyOptionSelected(index: number, value: RegExp) {
    await this.toggles[index].verifySelected(value);
  }

  public async selectOptions(...values: readonly RegExp[]) {
    for (const toggle of this.toggles) {
      const valueIndex = this.toggles.indexOf(toggle);

      await toggle.select(values[valueIndex]);
    }
  }

  public async verifyOptionsSelected(...values: readonly RegExp[]) {
    for (const toggle of this.toggles) {
      const valueIndex = this.toggles.indexOf(toggle);

      await toggle.verifySelected(values[valueIndex]);
    }
  }
}
