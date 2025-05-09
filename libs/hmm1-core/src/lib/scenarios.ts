import {PlayerId} from './core';
import {createMap, type Map, MapHeroObjectType, MapTownObjectType} from './map';
import {ScenarioDifficulty, ScenarioSize} from './scenario';
import {TownClassId} from './town';

export type ScenarioData = Map;

export const scenarios: readonly Map[] = [
  createMap({
    description: 'The Griffons will protect you  until you are ready to make your move.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'Claw ( Easy )',
    objectInfo: [
      {
        army: [],
        experience: 0,
        id: 0,
        owner: PlayerId.Player1,
        startArtifact: [],
        type: MapHeroObjectType,
      },
      {
        buildings: 0,
        garrison: [],
        initFlag: 0,
        mageGuildLevel: 0,
        owner: PlayerId.Player1,
        type: MapTownObjectType,
      },
      {
        army: [],
        experience: 0,
        id: 0,
        owner: PlayerId.Player2,
        startArtifact: [],
        type: MapHeroObjectType,
      },
      {
        buildings: 0,
        garrison: [],
        initFlag: 0,
        mageGuildLevel: 0,
        owner: PlayerId.Player2,
        type: MapTownObjectType,
      },
      {
        army: [],
        experience: 0,
        id: 0,
        owner: PlayerId.Player3,
        startArtifact: [],
        type: MapHeroObjectType,
      },
      {
        buildings: 0,
        garrison: [],
        initFlag: 0,
        mageGuildLevel: 0,
        owner: PlayerId.Player3,
        type: MapTownObjectType,
      },
      {
        army: [],
        experience: 0,
        id: 0,
        owner: PlayerId.Player4,
        startArtifact: [],
        type: MapHeroObjectType,
      },
      {
        buildings: 0,
        garrison: [],
        initFlag: 0,
        mageGuildLevel: 0,
        owner: PlayerId.Player4,
        type: MapTownObjectType,
      },
    ],
    size: ScenarioSize.Small,
    townInfo: [
      {
        class: TownClassId.Farm,
        x: 0,
        y: 0,
      },
      {
        class: TownClassId.Plains,
        x: 0,
        y: 0,
      },
      {
        class: TownClassId.Forest,
        x: 0,
        y: 0,
      },
      {
        class: TownClassId.Mountains,
        x: 0,
        y: 0,
      },
    ],
  }),
  createMap({
    description: 'A large island with tight passes with a circular feel',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Around the Bay',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'A treatcherous place, difficulty to navigate. Much to be gained far from home.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Badlands',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'A small island where the action starts quickly. Watch your back!',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Close Quarters',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: "You're the center of attention with little time to prepare. Good luck, you'll need it.",
    difficulty: ScenarioDifficulty.Tough,
    name: 'Crossroads',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'A large island of mostly desert is lush and plentiful along its shore.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Desert Isle',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'The enemy is in sight! The Dragons of the pass will keep the peace, but for how long?',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Dragon Pass',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'Stranded on this island, the four kingdoms have divided the area.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Four Nations',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'An exotic place rich with resources an hidden treasure caches.',
    difficulty: ScenarioDifficulty.Normal,
    name: "Hermit's Isle",
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'This scenario seems Impossible to win. Can you conquer the Jolly Roger?',
    difficulty: ScenarioDifficulty.Impossible,
    name: 'Jolly Roger',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'Invading Knights spare 3 of your towns and agree to peace talks at your castle.',
    difficulty: ScenarioDifficulty.Tough,
    name: "Knight's Quest",
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'The mountain passes are important. The bridge is the key between East and West.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Land Bridge',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Open spaces and guarded passes make up this dangerous, challenging area.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Pathways',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'An area rich in resources and treasure known for its ease of travel by both land and sea.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Rivers End',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'A place of great mystery. Legend tells of a hidden yet inaccessable treasure cache.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Shangri-La',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Much to explore and many treasures. The greatest danger lies close to home.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'Squirrel Lake',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Surrounded, outmatched, and undersupplied. Can you survive the Jester?',
    difficulty: ScenarioDifficulty.Tough,
    name: 'The Jester',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'A small island seems easy... Until they arrive!',
    difficulty: ScenarioDifficulty.Tough,
    name: 'Two if by Sea',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'The desert holds great wealth for those who can brave it. Follow the Beduin trails...',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Arabian Nights',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: "A thriving continent. But why is that volcano rumbling... and what's this about a secret?",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Atlantis',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: "The pathways keep you safe, but you'll need to take risks to conquer this marshy land.",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Bayou',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: "Three borthers fight for their father's kingdom, and an old rival takes advantage.",
    difficulty: ScenarioDifficulty.Tough,
    name: 'Civil War',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'A massive conflict. Four large empires separated by heavily defended neutrals.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Empires At War',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Fire Island is said to hold the riches of the land.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Fire Island',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Four nations fight for the remains of a fallen empire.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Ghost Town',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'A strangely familiar land...',
    difficulty: ScenarioDifficulty.Normal,
    name: 'GringoLand',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'Rule the waves to rule Britannia!!!',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Hail Britannia',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'The fastest victory can lie on the outer edges, but power comes from the center.',
    difficulty: ScenarioDifficulty.Easy,
    name: 'New World',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: "They say the grass is greener on the other side, but you'll have to get there to find out!",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Neightbors',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'Four Warlocks duel in a specially constructed arena of magic.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'The Arena',
    objectInfo: [],
    size: ScenarioSize.Small,
    townInfo: [],
  }),
  createMap({
    description: 'Lots of reasources make this a quick start but a tough finish.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'The Sound',
    objectInfo: [],
    size: ScenarioSize.Large,
    townInfo: [],
  }),
  createMap({
    description: 'No boats... How will you get around?',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Safe Corners?',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: 'A favorite vacation resort for all the fashionable ogres and trolls.',
    difficulty: ScenarioDifficulty.Normal,
    name: 'Sea Breeze',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
  createMap({
    description: "The towns have all the neat stuff, but don't ignore the rougher terrains!",
    difficulty: ScenarioDifficulty.Normal,
    name: 'Town Haul',
    objectInfo: [],
    size: ScenarioSize.Medium,
    townInfo: [],
  }),
];
