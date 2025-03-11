import { type MouseEvent, useCallback, useState } from 'react';

import { useToggle2 } from '../useToggle';

export interface UseModalResult<Args extends [MouseEvent, ...unknown[]] = [MouseEvent]> {
  readonly clickOpened: boolean;
  readonly close: () => void;
  readonly isOpen: boolean;
  onClick: (...args: Args) => void;
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
  const [clickOpened, setClickOpened] = useState(false);

  const handleClose = useCallback(() => {
    setClickOpened(false);

    close();
  }, [close]);

  const handleDocumentMouseUp = useCallback(
    (e: globalThis.MouseEvent) => {
      if (e.button === 2) {
        document.removeEventListener('mouseup', handleDocumentMouseUp);

        handleClose();

        onAfterClose?.();
      }
    },
    [handleClose, onAfterClose],
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

  const handleClick = useCallback(
    (...args: Args) => {
      onBeforeOpen?.(...args);

      open();

      setClickOpened(true);
    },
    [onBeforeOpen, open],
  );

  return {
    clickOpened,
    close: handleClose,
    isOpen,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    open,
  };
};
