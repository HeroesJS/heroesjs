export function nextOption<T>(options: readonly T[], selectedOption: T): T {
  if (!options.length) {
    throw new Error('At least one option is required');
  }

  if (!options.includes(selectedOption)) {
    throw new Error('Selected option must be a valid option');
  }

  return options[(options.indexOf(selectedOption) + 1) % options.length];
}
