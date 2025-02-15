import { ScenarioDifficulty, ScenarioSize } from './scenario';

export interface ScenarioData {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly name: string;
  readonly size: ScenarioSize;
}

export const scenarios: readonly ScenarioData[] = [
  {
    description: 'The Griffons will protect you  until you are ready to make your move.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'Claw ( Easy )',
    size: ScenarioSize.Small,
  },
  {
    description: 'A large island with tight passes with a circular feel',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Around the Bay',
    size: ScenarioSize.Medium,
  },
  {
    description: 'A treatcherous place, difficulty to navigate. Much to be gained far from home.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Badlands',
    size: ScenarioSize.Large,
  },
  {
    description: 'A small island where the action starts quickly. Watch your back!',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Close Quarters',
    size: ScenarioSize.Small,
  },
  {
    description: "You're the center of attention with little time to prepare. Good luck, you'll need it.",
    difficulty: ScenarioDifficulty.Tough,
    name: 'Crossroads',
    size: ScenarioSize.Medium,
  },
  {
    description: 'A large island of mostly desert is lush and plentiful along its shore.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Desert Isle',
    size: ScenarioSize.Medium,
  },
  {
    description: 'The enemy is in sight! The Dragons of the pass will keep the peace, but for how long?',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Dragon Pass',
    size: ScenarioSize.Medium,
  },
  {
    description: 'Stranded on this island, the four kingdoms have divided the area.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Four Nations',
    size: ScenarioSize.Small,
  },
  {
    description: 'An exotic place rich with resources an hidden treasure caches.',
    difficulty: ScenarioDifficulty.Normal,
    name: "Hermit's Isle",
    size: ScenarioSize.Small,
  },
  {
    description: 'This scenario seems Impossible to win. Can you conquer the Jolly Roger?',
    difficulty: ScenarioDifficulty.Impossible,
    name: 'Jolly Roger',
    size: ScenarioSize.Small,
  },
  {
    description: 'Invading Knights spare 3 of your towns and agree to peace talks at your castle.',
    difficulty: ScenarioDifficulty.Tough,
    name: "Knight's Quest",
    size: ScenarioSize.Large,
  },
  {
    description: 'The mountain passes are important. The bridge is the key between East and West.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Land Bridge',
    size: ScenarioSize.Large,
  },
  {
    description: 'Open spaces and guarded passes make up this dangerous, challenging area.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Pathways',
    size: ScenarioSize.Medium,
  },
  {
    description: 'An area rich in resources and treasure known for its ease of travel by both land and sea.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Rivers End',
    size: ScenarioSize.Large,
  },
  {
    description: 'A place of great mystery. Legend tells of a hidden yet inaccessable treasure cache.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Shangri-La',
    size: ScenarioSize.Large,
  },
  {
    description: 'Much to explore and many treasures. The greatest danger lies close to home.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'Squirrel Lake',
    size: ScenarioSize.Large,
  },
  {
    description: 'Surrounded, outmatched, and undersupplied. Can you survive the Jester?',
    difficulty: ScenarioDifficulty.Tough,
    name: 'The Jester',
    size: ScenarioSize.Small,
  },
  {
    description: 'A small island seems easy... Until they arrive!',
    difficulty: ScenarioDifficulty.Tough,
    name: 'Two if by Sea',
    size: ScenarioSize.Small,
  },
  {
    description: 'The desert holds great wealth for those who can brave it. Follow the Beduin trails...',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Arabian Nights',
    size: ScenarioSize.Medium,
  },
  {
    description: "A thriving continent. But why is that volcano rumbling... and what's this about a secret?",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Atlantis',
    size: ScenarioSize.Small,
  },
  {
    description: "The pathways keep you safe, but you'll need to take risks to conquer this marshy land.",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Bayou',
    size: ScenarioSize.Large,
  },
  {
    description: "Three borthers fight for their father's kingdom, and an old rival takes advantage.",
    difficulty: ScenarioDifficulty.Tough,
    name: 'Civil War',
    size: ScenarioSize.Medium,
  },
  {
    description: 'A massive conflict. Four large empires separated by heavily defended neutrals.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Empires At War',
    size: ScenarioSize.Large,
  },
  {
    description: 'Fire Island is said to hold the riches of the land.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Fire Island',
    size: ScenarioSize.Large,
  },
  {
    description: 'Four nations fight for the remains of a fallen empire.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Ghost Town',
    size: ScenarioSize.Medium,
  },
  {
    description: 'A strangely familiar land...',
    difficulty: ScenarioDifficulty.Normal,
    name: 'GringoLand',
    size: ScenarioSize.Large,
  },
  {
    description: 'Rule the waves to rule Britannia!!!',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Hail Britannia',
    size: ScenarioSize.Small,
  },
  {
    description: 'The fastest victory can lie on the outer edges, but power comes from the center.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'New World',
    size: ScenarioSize.Small,
  },
  {
    description: "They say the grass is greener on the other side, but you'll have to get there to find out!",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Neightbors',
    size: ScenarioSize.Medium,
  },
  {
    description: 'Four Warlocks duel in a specially constructed arena of magic.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'The Arena',
    size: ScenarioSize.Small,
  },
  {
    description: 'Lots of reasources make this a quick start but a tough finish.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'The Sound',
    size: ScenarioSize.Large,
  },
  {
    description: 'No boats... How will you get around?',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Safe Corners?',
    size: ScenarioSize.Medium,
  },
  {
    description: 'A favorite vacation resort for all the fashionable ogres and trolls.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Sea Breeze',
    size: ScenarioSize.Medium,
  },
  {
    description: "The towns have all the neat stuff, but don't ignore the rougher terrains!",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Town Haul',
    size: ScenarioSize.Medium,
  },
];
