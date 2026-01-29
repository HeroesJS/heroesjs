import { ComputerOpponentSetting, GameDifficulty, noOpponent } from './core.js';
import { MapDifficulty, MapSize } from './map.js';
import { type DifficultyRatingSettings, getDifficultyRating } from './rating.js';

describe(getDifficultyRating, () => {
  const baseSettings: DifficultyRatingSettings = {
    gameDifficulty: GameDifficulty.Easy,
    kingOfTheHill: false,
    mapDifficulty: MapDifficulty.Easy,
    mapSize: MapSize.Small,
    opponentSettings: [noOpponent, noOpponent, noOpponent],
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
    [{ opponentSettings: [noOpponent, noOpponent, noOpponent] }, -10],
    [{ opponentSettings: [ComputerOpponentSetting.Dumb, noOpponent, noOpponent] }, 5],
    [
      {
        opponentSettings: [ComputerOpponentSetting.Average, noOpponent, noOpponent],
      },
      10,
    ],
    [{ opponentSettings: [ComputerOpponentSetting.Smart, noOpponent, noOpponent] }, 15],
    [
      {
        opponentSettings: [ComputerOpponentSetting.Genius, noOpponent, noOpponent],
      },
      20,
    ],
    [{ opponentSettings: [GameDifficulty.Easy, noOpponent, noOpponent] }, 0],
    // king of the hill
    [
      {
        kingOfTheHill: true,
        opponentSettings: [noOpponent, noOpponent, noOpponent],
      },
      -10,
    ],
    [
      {
        kingOfTheHill: true,
        opponentSettings: [ComputerOpponentSetting.Dumb, noOpponent, noOpponent],
      },
      5,
    ],
    [
      {
        kingOfTheHill: true,
        opponentSettings: [ComputerOpponentSetting.Dumb, ComputerOpponentSetting.Dumb, noOpponent],
      },
      25,
    ],
    [
      {
        kingOfTheHill: true,
        opponentSettings: [ComputerOpponentSetting.Dumb, ComputerOpponentSetting.Dumb, ComputerOpponentSetting.Dumb],
      },
      45,
    ],
  ])('should return rating for %o', (settings, rating) => {
    expect(getDifficultyRating({ ...baseSettings, ...settings })).toBe(rating);
  });
});
