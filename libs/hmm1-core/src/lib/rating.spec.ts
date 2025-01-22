import { OpponentDifficulty } from './core';
import { calculateRating, type RatingData } from './rating';
import { ScenarioDifficulty, ScenarioSize } from './scenario';

describe(calculateRating, () => {
  const baseData: RatingData = {
    kingOfTheHill: false,
    opponentSettings: [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
    scenarioDifficulty: ScenarioDifficulty.Easy,
    scenarioSize: ScenarioSize.Small,
  };

  it('returns -10 as base', () => {
    expect(calculateRating(baseData)).toBe(-10);
  });

  describe('scenario size', () => {
    it.each([
      [-10, ScenarioSize.Small],
      [0, ScenarioSize.Medium],
      [10, ScenarioSize.Large],
    ])('returns %i when scenario difficulty is %s', (expected, scenarioSize) => {
      expect(
        calculateRating({
          ...baseData,
          scenarioSize,
        }),
      ).toBe(expected);
    });
  });

  describe('scenario difficulty', () => {
    it.each([
      [-10, ScenarioDifficulty.Easy],
      [0, ScenarioDifficulty.Normal],
      [10, ScenarioDifficulty.Tough],
      [20, ScenarioDifficulty.Impossible],
    ])('returns %i when scenario difficulty is %s', (expected, scenarioDifficulty) => {
      expect(
        calculateRating({
          ...baseData,
          scenarioDifficulty,
        }),
      ).toBe(expected);
    });
  });

  describe('opponent settings', () => {
    it.each([
      [-10, [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None]],
      [5, [OpponentDifficulty.Dumb, OpponentDifficulty.None, OpponentDifficulty.None]],
      [10, [OpponentDifficulty.Average, OpponentDifficulty.None, OpponentDifficulty.None]],
      [15, [OpponentDifficulty.Smart, OpponentDifficulty.None, OpponentDifficulty.None]],
      [20, [OpponentDifficulty.Genius, OpponentDifficulty.None, OpponentDifficulty.None]],
    ])('returns %i when opponent settings are %o', (expected, opponentSettings) => {
      expect(
        calculateRating({
          ...baseData,
          opponentSettings,
        }),
      ).toBe(expected);
    });
  });

  describe('king of the hill', () => {
    it.each([
      [-10, 0, OpponentDifficulty.Dumb],
      [5, 1, OpponentDifficulty.Dumb],
      [25, 2, OpponentDifficulty.Dumb],
      [45, 3, OpponentDifficulty.Dumb],
    ])('returns %i when king of the hill and %i %s opponent(s)', (expected, opponentCount, opponentDifficulty) => {
      expect(
        calculateRating({
          ...baseData,
          kingOfTheHill: true,
          opponentSettings: new Array(3).fill(OpponentDifficulty.None).fill(opponentDifficulty, 0, opponentCount),
        }),
      ).toBe(expected);
    });
  });
});
