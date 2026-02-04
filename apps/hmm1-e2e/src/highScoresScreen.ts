import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class HighScoresScreen extends Screen {
  private readonly standardGameScoresTable: Locator;
  private readonly campaignGameScoresTable: Locator;

  private readonly playerHeader: Locator;
  private readonly landHeader: Locator;
  private readonly scoreHeader: Locator;
  private readonly leaderHeader: Locator;
  private readonly daysHeader: Locator;
  private readonly titleHeader: Locator;

  private readonly standardButton: Locator;
  private readonly campaignButton: Locator;

  private readonly exitButton: Locator;

  constructor(page: Page) {
    super(page, /^high scores$/i);

    this.standardGameScoresTable = page.getByRole('table', { name: /^standard game$/i });
    this.campaignGameScoresTable = page.getByRole('table', { name: /^campaign game$/i });

    this.playerHeader = page.getByRole('columnheader', { name: /^player$/i });
    this.landHeader = page.getByRole('columnheader', { name: /^land$/i });
    this.scoreHeader = page.getByRole('columnheader', { name: /^score$/i });
    this.leaderHeader = page.getByRole('columnheader', { name: /^leader$/i });
    this.daysHeader = page.getByRole('columnheader', { name: /^days$/i });
    this.titleHeader = page.getByRole('columnheader', { name: /^title$/i });

    this.standardButton = page.getByRole('button', { name: /^standard$/i });
    this.campaignButton = page.getByRole('button', { name: /^campaign$/i });

    this.exitButton = page.getByRole('button', { name: /^exit$/i });
  }

  public goto() {
    return this.page.goto('/high-scores');
  }

  public async selectStandardGameScores() {
    await this.campaignButton.click();
  }

  public async verifyStandardGameScoresShown() {
    await expect(this.standardGameScoresTable).toBeVisible();

    await expect(this.playerHeader).toBeVisible();
    await expect(this.landHeader).toBeVisible();
    await expect(this.scoreHeader).toBeVisible();
    await expect(this.titleHeader).toBeVisible();

    await expect(this.standardButton).toBeVisible();
  }

  public async verifyStandardGameEntry(
    entryNumber: number,
    player: RegExp,
    land: RegExp,
    score: RegExp,
    title: RegExp
  ) {
    await this.verifyEntry(entryNumber, [player, land, score, title]);
  }

  public async verifyDefaultStandardGameEntries() {
    await this.verifyStandardGameEntry(1, /^lord kilburn$/i, /^the jester$/i, /^130$/i, /^cavalry$/i);
    await this.verifyStandardGameEntry(2, /^tsabu$/i, /^two if by sea$/i, /^110$/i, /^ogre$/i);
    await this.verifyStandardGameEntry(3, /^sir galant$/i, /^knight's quest$/i, /^90$/i, /^elf$/i);
    await this.verifyStandardGameEntry(4, /^thundax$/i, /^crossroads$/i, /^70$/i, /^wolf$/i);
    await this.verifyStandardGameEntry(5, /^lord haart$/i, /^shangri-la$/i, /^60$/i, /^dwarf$/i);
    await this.verifyStandardGameEntry(6, /^ariel$/i, /^river's end$/i, /^50$/i, /^gargoyle$/i);
    await this.verifyStandardGameEntry(7, /^rebecca$/i, /^pathways$/i, /^40$/i, /^orc$/i);
    await this.verifyStandardGameEntry(8, /^sandro$/i, /^squirrel lake$/i, /^30$/i, /^rogue$/i);
    await this.verifyStandardGameEntry(9, /^crodo$/i, /^continentia$/i, /^20$/i, /^sprite$/i);
    await this.verifyStandardGameEntry(10, /^barok$/i, /^the claw$/i, /^10$/i, /^goblin$/i);
  }

  public async selectCampaignGameScores() {
    await this.standardButton.click();
  }

  public async verifyCampaignGameScoresShown() {
    await expect(this.campaignGameScoresTable).toBeVisible();

    await expect(this.playerHeader).toBeVisible();
    await expect(this.leaderHeader).toBeVisible();
    await expect(this.daysHeader).toBeVisible();
    await expect(this.titleHeader).toBeVisible();

    await expect(this.campaignButton).toBeVisible();
  }

  public async verifyCampaignGameEntry(
    entryNumber: number,
    player: RegExp,
    leader: RegExp,
    days: RegExp,
    title: RegExp
  ) {
    await this.verifyEntry(entryNumber, [player, leader, days, title]);
  }

  public async verifyDefaultCampaignGameEntries() {
    await this.verifyCampaignGameEntry(1, /^maximus$/i, /^lord ironfist$/i, /^500$/i, /^paladin$/i);
    await this.verifyCampaignGameEntry(2, /^antoine$/i, /^lord slayer$/i, /^700$/i, /^ghost$/i);
    await this.verifyCampaignGameEntry(3, /^astra$/i, /^queen lamanda$/i, /^900$/i, /^druid$/i);
    await this.verifyCampaignGameEntry(4, /^agar$/i, /^lord alamar$/i, /^1200$/i, /^griffin$/i);
    await this.verifyCampaignGameEntry(5, /^vatawna$/i, /^queen lamanda$/i, /^1500$/i, /^wolf$/i);
    await this.verifyCampaignGameEntry(6, /^vesper$/i, /^lord alamar$/i, /^1700$/i, /^dwarf$/i);
    await this.verifyCampaignGameEntry(7, /^ambrose$/i, /^lord ironfist$/i, /^2000$/i, /^gargoyle$/i);
    await this.verifyCampaignGameEntry(8, /^troyan$/i, /^queen lamanda$/i, /^2400$/i, /^orc$/i);
    await this.verifyCampaignGameEntry(9, /^jojosh$/i, /^lord slayer$/i, /^3200$/i, /^sprite$/i);
    await this.verifyCampaignGameEntry(10, /^wrathmont$/i, /^lord alamar$/i, /^4400$/i, /^peasant$/i);
  }

  public async exit() {
    await this.exitButton.click();
  }

  private async verifyEntry(entryNumber: number, cells: readonly RegExp[]) {
    const row = this.page.getByRole('row').nth(entryNumber);

    for (const cell of cells) {
      await expect(row.getByRole('cell', { name: cell })).toBeVisible();
    }
  }
}
