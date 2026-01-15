import { mapSupportsHumanPlayers } from './map';

describe(mapSupportsHumanPlayers, () => {
  test.each([
    ['XXXX1234.MAP', 1, true],
    ['XXXX1234.MAP', 2, true],
    ['XXXX1234.MAP', 3, true],
    ['XXXX1234.MAP', 4, true],
    ['XXXX0234.MAP', 1, false],
    ['XXXX1034.MAP', 2, false],
    ['XXXX1204.MAP', 3, false],
    ['XXXX1230.MAP', 4, false],
  ])('should return $2 when $0 and $1 count', (fileName, count, result) => {
    expect(mapSupportsHumanPlayers(fileName, count)).toBe(result);
  });

  it('should throw when count is less or equal to 0', () => {
    expect(() => mapSupportsHumanPlayers('XXXX1234.MAP', 0)).toThrow();
  });

  it('should throw when count is greater than 4', () => {
    expect(() => mapSupportsHumanPlayers('XXXX1234.MAP', 5)).toThrow();
  });
});
