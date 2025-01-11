import { OpponentDifficulty, ScenarioDifficulty, ScenarioSize } from './core';
import { calculateRating, type RatingData } from './rating';

interface TestData extends RatingData {
  readonly expected: number;
}

describe(calculateRating, () => {
  it.each<TestData>([
    // Base
    {
      expected: -10,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    // Scenario size
    {
      expected: 0,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Normal,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 10,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Hard,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 20,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Tough,
      scenarioSize: ScenarioSize.Small,
    },
    // Scenario difficulty
    {
      expected: 0,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Normal,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 10,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Hard,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 20,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Tough,
      scenarioSize: ScenarioSize.Small,
    },
    // Opponent settings
    {
      expected: 5,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 10,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.Average, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 15,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.Smart, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 20,
      kingOfTheHill: false,
      opponentSettings: [OpponentDifficulty.Genius, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    // King of the hill
    {
      expected: -10,
      kingOfTheHill: true,
      opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 5,
      kingOfTheHill: true,
      opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.None, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 25,
      kingOfTheHill: true,
      opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.Dumb, OpponentDifficulty.None],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
    {
      expected: 45,
      kingOfTheHill: true,
      opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.Dumb, OpponentDifficulty.Dumb],
      scenarioDifficulty: ScenarioDifficulty.Easy,
      scenarioSize: ScenarioSize.Small,
    },
  ])(
    'it returns $expected when scenario difficulty is $scenarioDifficulty, opponent settings is $opponentSettings and king of the hill is $kingOfTheHill',
    ({ expected, ...data }) => {
      expect(calculateRating(data)).toBe(expected);
    },
  );
});
