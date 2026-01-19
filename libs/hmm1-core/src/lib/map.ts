import { MaxPlayerCount } from './core.js';

export enum MapSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const mapSizeLabel: Readonly<Record<MapSize, string>> = {
  [MapSize.Large]: 'Large',
  [MapSize.Medium]: 'Medium',
  [MapSize.Small]: 'Small',
};

export enum MapDifficulty {
  Easy = 'easy',
  Impossible = 'impossible',
  Normal = 'normal',
  Tough = 'tough',
}

export const mapDifficultyLabel: Readonly<Record<MapDifficulty, string>> = {
  [MapDifficulty.Easy]: 'Easy',
  [MapDifficulty.Impossible]: 'Impossible',
  [MapDifficulty.Normal]: 'Normal',
  [MapDifficulty.Tough]: 'Tough',
};

export function mapSupportsHumanPlayers(fileName: string, count: number): boolean {
  if (count <= 0 || count > MaxPlayerCount) {
    throw new Error(`Human player count must be between 0 and ${MaxPlayerCount - 1}`);
  }

  return fileName.split('.')[0].charAt(3 + count) === count.toString();
}
