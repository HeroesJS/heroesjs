import { type MouseEvent, useState } from 'react';

interface UseInfoModalResult {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly onMouseDown: (e: MouseEvent) => void;
  readonly open: () => void;
}

export function useInfoModal(): UseInfoModalResult {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
    close: handleClose,
    isOpen,
    onMouseDown: handleMouseDown,
    open: handleOpen,
  };
}
