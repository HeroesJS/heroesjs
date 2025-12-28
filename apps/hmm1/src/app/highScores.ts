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
