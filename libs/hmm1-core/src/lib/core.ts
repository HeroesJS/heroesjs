export enum PlayerColor {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}

export const playerColors: readonly PlayerColor[] = [
  PlayerColor.Blue,
  PlayerColor.Green,
  PlayerColor.Red,
  PlayerColor.Yellow,
];

export enum GameDifficulty {
  Easy = 'easy',
  Expert = 'expert',
  Hard = 'hard',
  Normal = 'normal',
}

export const gameDifficulties: readonly GameDifficulty[] = [
  GameDifficulty.Easy,
  GameDifficulty.Normal,
  GameDifficulty.Hard,
  GameDifficulty.Expert,
];

export enum OpponentDifficulty {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  None = 'none',
  Smart = 'smart',
}

export const opponentDifficulties: readonly OpponentDifficulty[] = [
  OpponentDifficulty.None,
  OpponentDifficulty.Dumb,
  OpponentDifficulty.Average,
  OpponentDifficulty.Smart,
  OpponentDifficulty.Genius,
];
