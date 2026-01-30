import {
  GameDifficulty,
  getDefaultOpponentSettings,
  getOpponentGameDifficulty,
  isHumanOpponent,
  OpponentDifficulty,
} from './core.js';

describe(isHumanOpponent, () => {
  it.each([
    [false, 0, 0],
    [false, 1, 0],
    [false, 2, 0],
    [true, 0, 1],
    [false, 1, 1],
    [false, 2, 1],
    [true, 0, 2],
    [true, 1, 2],
    [false, 2, 2],
    [true, 0, 3],
    [true, 1, 3],
    [true, 2, 3],
  ])('should return $0 when index is $1 and human opponent count is $2', (result, opponentIndex, humanPlayerCount) => {
    expect(isHumanOpponent(opponentIndex, humanPlayerCount)).toBe(result);
  });
});

describe(getOpponentGameDifficulty, () => {
  it.each([
    [GameDifficulty.Easy, OpponentDifficulty.Dumb],
    [GameDifficulty.Normal, OpponentDifficulty.Average],
    [GameDifficulty.Hard, OpponentDifficulty.Smart],
    [GameDifficulty.Expert, OpponentDifficulty.Genius],
  ])('should return $0 when $1', (result, opponent) => {
    expect(getOpponentGameDifficulty(opponent)).toBe(result);
  });
});

describe(getDefaultOpponentSettings, () => {
  it('should return average difficulty for every opponent', () => {
    expect(getDefaultOpponentSettings()).toEqual([
      OpponentDifficulty.Average,
      OpponentDifficulty.Average,
      OpponentDifficulty.Average,
    ]);
  });
});
