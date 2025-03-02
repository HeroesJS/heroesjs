import { type MouseEvent, useCallback } from 'react';

import { useToggle2 } from '../useToggle';

export interface UseModalResult<Args extends Array<unknown> = never> {
  readonly close: () => void;
  readonly handlers: {
    onMouseDown: (e: MouseEvent, ...args: Args) => void;
  };
  readonly isOpen: boolean;
  readonly open: () => void;
}

export const useModal = <Args extends Array<unknown> = never>(
  initialIsOpen = false,
  onBeforeOpen?: (...args: Args) => void,
  onAfterClose?: () => void,
): UseModalResult<Args> => {
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
    (e: MouseEvent, ...args: Args) => {
      if (e.button === 2) {
        document.addEventListener('mouseup', handleDocumentMouseUp);

        onBeforeOpen?.(...args);

        open();
      }
    },
    [handleDocumentMouseUp, onBeforeOpen, open],
  );

  return {
    close,
    handlers: {
      onMouseDown: handleMouseDown,
    },
    isOpen,
    open,
  };
};
