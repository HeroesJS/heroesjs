import { GameType } from './core.js';

export interface StandardGameScore {
  readonly player: string;
  readonly scenario: string;
  readonly score: number;
  readonly title: string;
}

export const defaultStandardGameHighScores: readonly StandardGameScore[] = [
  {
    player: 'Lord Kilburn',
    scenario: 'The Jester',
    score: 130,
    title: 'Cavalry',
  },
  {
    player: 'Tsabu',
    scenario: 'Two if by Sea',
    score: 110,
    title: 'Ogre',
  },
  {
    player: 'Sir Galant',
    scenario: "Knight's Quest",
    score: 90,
    title: 'Elf',
  },
  {
    player: 'Thundax',
    scenario: 'Crossroads',
    score: 70,
    title: 'Wolf',
  },
  {
    player: 'Lord Haart',
    scenario: 'Shangri-La',
    score: 60,
    title: 'Dwarf',
  },
  {
    player: 'Ariel',
    scenario: "River's End",
    score: 50,
    title: 'Gargoyle',
  },
  {
    player: 'Rebecca',
    scenario: 'Pathways',
    score: 40,
    title: 'Orc',
  },
  {
    player: 'Sandro',
    scenario: 'Squirrel Lake',
    score: 30,
    title: 'Rogue',
  },
  {
    player: 'Crodo',
    scenario: 'Continentia',
    score: 20,
    title: 'Sprite',
  },
  {
    player: 'Barok',
    scenario: 'The Claw',
    score: 10,
    title: 'Goblin',
  },
];

export interface CampaignGameScore {
  readonly days: number;
  readonly leader: string;
  readonly player: string;
  readonly title: string;
}

export const defaultCampaignGameHighScores: readonly CampaignGameScore[] = [
  {
    days: 500,
    leader: 'Lord Ironfist',
    player: 'Maximus',
    title: 'Paladin',
  },
  {
    days: 700,
    leader: 'Lord Slayer',
    player: 'Antoine',
    title: 'Ghost',
  },
  {
    days: 900,
    leader: 'Queen Lamanda',
    player: 'Astra',
    title: 'Druid',
  },
  {
    days: 1200,
    leader: 'Lord Alamar',
    player: 'Agar',
    title: 'Griffin',
  },
  {
    days: 1500,
    leader: 'Queen Lamanda',
    player: 'Vatawna',
    title: 'Wolf',
  },
  {
    days: 1700,
    leader: 'Lord Alamar',
    player: 'Vesper',
    title: 'Dwarf',
  },
  {
    days: 2000,
    leader: 'Lord Ironfist',
    player: 'Ambrose',
    title: 'Gargoyle',
  },
  {
    days: 2400,
    leader: 'Queen Lamanda',
    player: 'Troyan',
    title: 'Orc',
  },
  {
    days: 3200,
    leader: 'Lord Slayer',
    player: 'Jojosh',
    title: 'Sprite',
  },
  {
    days: 4400,
    leader: 'Lord Alamar',
    player: 'Wrathmont',
    title: 'Peasant',
  },
];

export type HighScoresGameType = GameType.Standard | GameType.Campaign;

export const defaultHighScoresGameType: HighScoresGameType = GameType.Standard;

export interface HighScores {
  [GameType.Campaign]?: readonly CampaignGameScore[];
  [GameType.Standard]?: readonly StandardGameScore[];
}

export const defaultHighScores: HighScores = {
  [GameType.Campaign]: defaultCampaignGameHighScores,
  [GameType.Standard]: defaultStandardGameHighScores,
};
