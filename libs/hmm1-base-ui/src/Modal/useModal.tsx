import { type DOMAttributes, type MouseEvent, useCallback } from 'react';

import { useToggle2 } from '../useToggle';

export interface UseModalResult {
  readonly close: () => void;
  readonly handlers: Required<Pick<DOMAttributes<Element>, 'onMouseDown'>>;
  readonly isOpen: boolean;
  readonly open: () => void;
}

export const useModal = (initialIsOpen = false): UseModalResult => {
  const [isOpen, open, close] = useToggle2(initialIsOpen);

  const handleDocumentMouseUp = useCallback(
    (e: globalThis.MouseEvent) => {
      if (e.button === 2) {
        document.removeEventListener('mouseup', handleDocumentMouseUp);

        close();
      }
    },
    [close],
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (e.button === 2) {
        document.addEventListener('mouseup', handleDocumentMouseUp);

        open();
      }
    },
    [handleDocumentMouseUp, open],
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
