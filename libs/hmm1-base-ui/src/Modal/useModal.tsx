import { useToggle2 } from '../useToggle';

export interface UseModalResult {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly open: () => void;
}

export const useModal = (initialIsOpen = false): UseModalResult => {
  const [isOpen, open, close] = useToggle2(initialIsOpen);

  return {
    close,
    isOpen,
    open,
  };
};
