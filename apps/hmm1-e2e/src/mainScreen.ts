import type { Locator, Page } from '@playwright/test';

class MainMenuPageObject {
  readonly menu: Locator;

  readonly newGameButton: Locator;
  readonly newGameInfoModal: Locator;

  readonly loadGameButton: Locator;
  readonly loadGameInfoModal: Locator;

  readonly viewHighScoresButton: Locator;
  readonly viewHighScoresInfoModal: Locator;

  readonly viewCreditsButton: Locator;
  readonly viewCreditsInfoModal: Locator;

  readonly quitButton: Locator;
  readonly quitInfoModal: Locator;

  constructor(page: Page) {
    this.menu = page.getByRole('menu', { name: /main menu/i });

    this.newGameButton = page.getByRole('button', { name: /new game/i });
    this.newGameInfoModal = page.getByRole('dialog', { name: /start a single or multi-player game\./i });

    this.loadGameButton = page.getByRole('button', { name: /load game/i });
    this.loadGameInfoModal = page.getByRole('dialog', { name: /load a previously saved game\./i });

    this.viewHighScoresButton = page.getByRole('button', { name: /view high scores/i });
    this.viewHighScoresInfoModal = page.getByRole('dialog', { name: /view the high score screen\./i });

    this.viewCreditsButton = page.getByRole('button', { name: /view credits/i });
    this.viewCreditsInfoModal = page.getByRole('dialog', { name: /view the credits screen\./i });

    this.quitButton = page.getByRole('button', { name: /quit/i });
    this.quitInfoModal = page.getByRole('dialog', {
      name: /quit heroes of might and magic and return to the dos prompt\./i,
    });
  }
}

class GameTypeMenuPageObject {
  readonly menu: Locator;

  readonly standardGameButton: Locator;
  readonly standardGameInfoModal: Locator;

  readonly campaignGameButton: Locator;
  readonly campaignGameInfoModal: Locator;

  readonly multiPlayerGameButton: Locator;
  readonly multiPlayerGameInfoModal: Locator;

  readonly cancelButton: Locator;
  readonly cancelInfoButton: Locator;

  constructor(page: Page) {
    this.menu = page.getByRole('menu', { name: /new game menu/i });

    this.standardGameButton = page.getByRole('button', { name: /standard game/i });
    this.standardGameInfoModal = page.getByRole('dialog', { name: /a single player game playing out a single map\./i });

    this.campaignGameButton = page.getByRole('button', { name: /campaign game/i });
    this.campaignGameInfoModal = page.getByRole('dialog', {
      name: /a single player game playing through a series of maps\./i,
    });

    this.multiPlayerGameButton = page.getByRole('button', { name: /multi-player game/i });
    this.multiPlayerGameInfoModal = page.getByRole('dialog', {
      name: /a multi-player game, with several human players competing against each other on a single map\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoButton = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }
}

class CampaignMenuPageObject {
  readonly menu: Locator;

  readonly playLordIronfistButton: Locator;
  readonly playLordIronfistInfoModal: Locator;

  readonly playLordSlayerButton: Locator;
  readonly playLordSlayerInfoModal: Locator;

  readonly playQueenLamandaButton: Locator;
  readonly playQueenLamandaInfoModal: Locator;

  readonly playLordAlamarButton: Locator;
  readonly playLordAlamarInfoModal: Locator;

  readonly cancelButton: Locator;
  readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    this.menu = page.getByRole('menu', { name: /campaign menu/i });

    this.playLordIronfistButton = page.getByRole('button', { name: /play lord ironfist/i });
    this.playLordIronfistInfoModal = page.getByRole('dialog', { name: /play the role of lord ironfist\./i });

    this.playLordSlayerButton = page.getByRole('button', { name: /play lord slayer/i });
    this.playLordSlayerInfoModal = page.getByRole('dialog', { name: /play the role of lord slayer\./i });

    this.playQueenLamandaButton = page.getByRole('button', { name: /play queen lamanda/i });
    this.playQueenLamandaInfoModal = page.getByRole('dialog', { name: /play the role of queen lamanda\./i });

    this.playLordAlamarButton = page.getByRole('button', { name: /play lord alamar/i });
    this.playLordAlamarInfoModal = page.getByRole('dialog', { name: /play the role of lord alamar\./i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }
}

export class MainScreen {
  readonly screen: Locator;

  readonly mainMenu: MainMenuPageObject;
  readonly gameTypeMenu: GameTypeMenuPageObject;
  readonly campaignMenu: CampaignMenuPageObject;

  constructor(private readonly page: Page) {
    this.screen = page.getByRole('main', { name: /main screen/i });

    this.mainMenu = new MainMenuPageObject(page);
    this.gameTypeMenu = new GameTypeMenuPageObject(page);
    this.campaignMenu = new CampaignMenuPageObject(page);
  }

  public goto() {
    return this.page.goto('/');
  }
}
