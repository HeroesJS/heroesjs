import { getDefaultOpponentSettings, OpponentSetting } from './core';

describe(getDefaultOpponentSettings, () => {
  it('should return average computer players when no human players', () => {
    expect(getDefaultOpponentSettings(0)).toEqual([
      OpponentSetting.Average,
      OpponentSetting.Average,
      OpponentSetting.Average,
    ]);
  });

  it('should return human players and average computer players when human players set', () => {
    expect(getDefaultOpponentSettings(1)).toEqual([
      OpponentSetting.Human,
      OpponentSetting.Average,
      OpponentSetting.Average,
    ]);

    expect(getDefaultOpponentSettings(2)).toEqual([
      OpponentSetting.Human,
      OpponentSetting.Human,
      OpponentSetting.Average,
    ]);

    expect(getDefaultOpponentSettings(3)).toEqual([
      OpponentSetting.Human,
      OpponentSetting.Human,
      OpponentSetting.Human,
    ]);
  });

  it('should throw when human player count is negative', () => {
    expect(() => getDefaultOpponentSettings(-1)).toThrow();
  });

  it('should throw when human player count is greater or equal 4', () => {
    expect(() => getDefaultOpponentSettings(4)).toThrow();
  });
});
