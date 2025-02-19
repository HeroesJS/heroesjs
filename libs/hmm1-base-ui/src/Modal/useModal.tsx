import { type ComponentProps, type DOMAttributes, type MouseEventHandler, useCallback } from 'react';

import type { Button } from '../Button';
import { useToggle2 } from '../useToggle';

export interface UseModalResult {
  readonly close: () => void;
  readonly handlers: Required<Pick<DOMAttributes<HTMLElement>, 'onMouseDown'>> &
    Pick<ComponentProps<typeof Button>, 'onRightButtonDown'>;
  readonly isOpen: boolean;
  readonly open: () => void;
}

export const useModal = (initialIsOpen = false): UseModalResult => {
  const [isOpen, open, close] = useToggle2(initialIsOpen);

  const handleDocumentMouseUp = useCallback(
    (e: MouseEvent) => {
      if (e.button === 2) {
        document.removeEventListener('mouseup', handleDocumentMouseUp);

        close();
      }
    },
    [close],
  );

  const handleMouseDown = useCallback<MouseEventHandler>(
    (e) => {
      if (e.button === 2) {
        document.addEventListener('mouseup', handleDocumentMouseUp);

        open();
      }
    },
    [handleDocumentMouseUp, open],
  );

  const handleRightButtonDown = useCallback(() => {
    document.addEventListener('mouseup', handleDocumentMouseUp);

    open();
  }, [handleDocumentMouseUp, open]);

  return {
    close,
    handlers: {
      onMouseDown: handleMouseDown,
      onRightButtonDown: handleRightButtonDown,
    },
    isOpen,
    open,
  };
};
