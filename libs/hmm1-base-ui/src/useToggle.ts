import { useState } from 'react';

interface UseToggleResult {
  readonly setFalse: () => void;
  readonly setTrue: () => void;
  readonly toggle: () => void;
  readonly value: boolean;
}

export const useToggle = (initialValue = false): UseToggleResult => {
  const [value, setValue] = useState(initialValue);

  return {
    setFalse: () => setValue(false),
    setTrue: () => setValue(true),
    toggle: () => setValue(!value),
    value,
  };
};
