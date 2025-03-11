import { type MouseEvent, useCallback } from 'react';

import { useToggle2 } from '../useToggle';

export interface UseModalResult<Args extends [MouseEvent, ...unknown[]] = [MouseEvent]> {
  readonly close: () => void;
  readonly isOpen: boolean;
  onMouseDown: (...args: Args) => void;
  readonly open: () => void;
}

export interface UseModalOptions<Args extends [MouseEvent, ...unknown[]] = [MouseEvent]> {
  onAfterClose?: () => void;
  onBeforeOpen?: (...args: Args) => void;
}

export const useModal = <Args extends [MouseEvent, ...unknown[]]>(
  initialIsOpen = false,
  options: UseModalOptions<Args> = {},
): UseModalResult<Args> => {
  const { onAfterClose, onBeforeOpen } = options;

  const [isOpen, open, close] = useToggle2(initialIsOpen);

  const handleDocumentMouseUp = useCallback(
    (e: globalThis.MouseEvent) => {
      if (e.button === 2) {
        document.removeEventListener('mouseup', handleDocumentMouseUp);

        close();

        onAfterClose?.();
      }
    },
    [close, onAfterClose],
  );

  const handleMouseDown = useCallback(
    (...args: Args) => {
      if (args[0].button === 2) {
        document.addEventListener('mouseup', handleDocumentMouseUp);

        onBeforeOpen?.(...args);

        open();
      }
    },
    [handleDocumentMouseUp, onBeforeOpen, open],
  );

  return {
    close,
    isOpen,
    onMouseDown: handleMouseDown,
    open,
  };
};
