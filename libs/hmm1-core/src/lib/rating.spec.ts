import { GameDifficulty, noOpponent, OpponentDifficulty } from './core.js';
import { MapDifficulty, MapSize } from './map.js';
import { type DifficultyRatingSettings, getDifficultyRating } from './rating.js';

describe(getDifficultyRating, () => {
  const baseSettings: DifficultyRatingSettings = {
    gameDifficulty: GameDifficulty.Easy,
    humanOpponentsCount: 0,
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
    [{ opponentSettings: [OpponentDifficulty.Dumb, noOpponent, noOpponent] }, 5],
    [
      {
        opponentSettings: [OpponentDifficulty.Average, noOpponent, noOpponent],
      },
      10,
    ],
    [{ opponentSettings: [OpponentDifficulty.Smart, noOpponent, noOpponent] }, 15],
    [
      {
        opponentSettings: [OpponentDifficulty.Genius, noOpponent, noOpponent],
      },
      20,
    ],
    [
      {
        humanOpponentsCount: 1,
        opponentSettings: [OpponentDifficulty.Dumb, noOpponent, noOpponent],
      },
      0,
    ],
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
        opponentSettings: [OpponentDifficulty.Dumb, noOpponent, noOpponent],
      },
      5,
    ],
    [
      {
        kingOfTheHill: true,
        opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.Dumb, noOpponent],
      },
      25,
    ],
    [
      {
        kingOfTheHill: true,
        opponentSettings: [OpponentDifficulty.Dumb, OpponentDifficulty.Dumb, OpponentDifficulty.Dumb],
      },
      45,
    ],
  ])('should return rating for %o', (settings, rating) => {
    expect(getDifficultyRating({ ...baseSettings, ...settings })).toBe(rating);
  });
});
