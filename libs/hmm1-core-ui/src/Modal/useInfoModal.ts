import type { MouseEvent } from 'react';

import { useToggle } from '../useToggle';

interface UseInfoModalResult {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly onMouseDown: (e: MouseEvent) => void;
  readonly open: () => void;
}

export function useInfoModal(): UseInfoModalResult {
  const [isOpen, open, close] = useToggle();

  const handleDocumentMouseUp = (e: globalThis.MouseEvent) => {
    if (e.button === 2) {
      document.removeEventListener('mouseup', handleDocumentMouseUp);

      close();
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 2) {
      open();

      document.addEventListener('mouseup', handleDocumentMouseUp);
    }
  };

  return {
    close,
    isOpen,
    onMouseDown: handleMouseDown,
    open,
  };
}
