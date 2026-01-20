import { type MouseEvent, useState } from 'react';

interface UseInfoModalResult {
  readonly open: boolean;
  readonly onMouseDown: (e: MouseEvent) => void;
}

export function useInfoModal(): UseInfoModalResult {
  const [isOpen, setOpen] = useState(false);

  const handleDocumentMouseUp = (e: globalThis.MouseEvent) => {
    if (e.button === 2) {
      document.removeEventListener('mouseup', handleDocumentMouseUp);

      setOpen(false);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 2) {
      setOpen(true);

      document.addEventListener('mouseup', handleDocumentMouseUp);
    }
  };

  return {
    open: isOpen,
    onMouseDown: handleMouseDown,
  };
}
