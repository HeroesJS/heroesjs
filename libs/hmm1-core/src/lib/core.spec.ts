import { ComputerOpponentSetting, GameDifficulty, getDefaultOpponentSettings, MaxPlayerCount } from './core.js';

describe(getDefaultOpponentSettings, () => {
  it('should return average computer opponents when no human opponents', () => {
    expect(getDefaultOpponentSettings(0)).toEqual([
      ComputerOpponentSetting.Average,
      ComputerOpponentSetting.Average,
      ComputerOpponentSetting.Average,
    ]);
  });

  it('should return human opponents and average computer opponents when human opponents is set', () => {
    expect(getDefaultOpponentSettings(1)).toEqual([
      GameDifficulty.Normal,
      ComputerOpponentSetting.Average,
      ComputerOpponentSetting.Average,
    ]);

    expect(getDefaultOpponentSettings(2)).toEqual([
      GameDifficulty.Normal,
      GameDifficulty.Normal,
      ComputerOpponentSetting.Average,
    ]);

    expect(getDefaultOpponentSettings(3)).toEqual([
      GameDifficulty.Normal,
      GameDifficulty.Normal,
      GameDifficulty.Normal,
    ]);
  });

  it('should throw when human opponent count is negative', () => {
    expect(() => getDefaultOpponentSettings(-1)).toThrow();
  });

  it('should throw when human opponent count is greater or equal max player count', () => {
    expect(() => getDefaultOpponentSettings(MaxPlayerCount)).toThrow();
  });
});
