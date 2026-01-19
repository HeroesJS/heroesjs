import { nextOption } from './util.js';

describe(nextOption, () => {
  it('should return next option', () => {
    expect(nextOption(['A', 'B'], 'A')).toBe('B');
  });

  it('should return first option when last option is selected', () => {
    expect(nextOption(['A', 'B'], 'B')).toBe('A');
  });

  it('should throw when no options', () => {
    expect(() => nextOption([], 'A')).toThrow();
  });

  it('should throw when selected option is not a valid option', () => {
    expect(() => nextOption(['A', 'B'], 'C')).toThrow();
  });
});
