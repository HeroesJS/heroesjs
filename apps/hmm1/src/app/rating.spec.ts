import { GameDifficulty, OpponentSetting } from './core';
import { MapDifficulty, MapSize } from './map';
import { type DifficultyRatingSettings, getDifficultyRating } from './rating';

describe(getDifficultyRating, () => {
  const baseSettings: DifficultyRatingSettings = {
    gameDifficulty: GameDifficulty.Easy,
    kingOfTheHill: false,
    mapDifficulty: MapDifficulty.Easy,
    mapSize: MapSize.Small,
    opponentSettings: [OpponentSetting.None, OpponentSetting.None, OpponentSetting.None],
  };

  const baseRating = -10;

  it('should return minimal rating', () => {
    expect(getDifficultyRating(baseSettings)).toBe(baseRating);
  });

  it.each<[Partial<DifficultyRatingSettings>, number]>([
    // map size
    [{ mapSize: MapSize.Small }, -10],
    [{ mapSize: MapSize.Medium }, 0],
    [{ mapSize: MapSize.Large }, 10],
    // map difficulty
    [{ mapDifficulty: MapDifficulty.Easy }, -10],
    [{ mapDifficulty: MapDifficulty.Normal }, 0],
    [{ mapDifficulty: MapDifficulty.Tough }, 10],
    [{ mapDifficulty: MapDifficulty.Impossible }, 20],
    // game difficulty
    [{ gameDifficulty: GameDifficulty.Easy }, -10],
    [{ gameDifficulty: GameDifficulty.Normal }, 0],
    [{ gameDifficulty: GameDifficulty.Hard }, 10],
    [{ gameDifficulty: GameDifficulty.Expert }, 20],
    // opponent settings
    [{ opponentSettings: [OpponentSetting.None, OpponentSetting.None, OpponentSetting.None] }, -10],
    [{ opponentSettings: [OpponentSetting.Dumb, OpponentSetting.None, OpponentSetting.None] }, 5],
    [{ opponentSettings: [OpponentSetting.Average, OpponentSetting.None, OpponentSetting.None] }, 10],
    [{ opponentSettings: [OpponentSetting.Smart, OpponentSetting.None, OpponentSetting.None] }, 15],
    [{ opponentSettings: [OpponentSetting.Genius, OpponentSetting.None, OpponentSetting.None] }, 20],
    [{ opponentSettings: [OpponentSetting.Human, OpponentSetting.None, OpponentSetting.None] }, 0],
    // king of the hill
    [
      { kingOfTheHill: true, opponentSettings: [OpponentSetting.None, OpponentSetting.None, OpponentSetting.None] },
      -10,
    ],
    [{ kingOfTheHill: true, opponentSettings: [OpponentSetting.Dumb, OpponentSetting.None, OpponentSetting.None] }, 5],
    [{ kingOfTheHill: true, opponentSettings: [OpponentSetting.Dumb, OpponentSetting.Dumb, OpponentSetting.None] }, 25],
    [{ kingOfTheHill: true, opponentSettings: [OpponentSetting.Dumb, OpponentSetting.Dumb, OpponentSetting.Dumb] }, 45],
  ])('should return rating for %o', (settings, rating) => {
    expect(getDifficultyRating({ ...baseSettings, ...settings })).toBe(rating);
  });
});
