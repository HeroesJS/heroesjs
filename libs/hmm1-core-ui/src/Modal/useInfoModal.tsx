import type { ComponentProps, JSX, MouseEvent } from 'react';

import { useToggle } from '../useToggle';
import { Modal } from './Modal';

type UseInfoModalOptions = Partial<ComponentProps<typeof Modal>>;

interface UseInfoModalResult {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly Modal: (props: Partial<ComponentProps<typeof Modal>>) => JSX.Element;
  readonly onMouseDown: (e: MouseEvent) => void;
  readonly open: () => void;
}

export function useInfoModal(options: UseInfoModalOptions = {}): UseInfoModalResult {
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
    Modal: (props) => <Modal open={isOpen} x={177} y={29} {...options} {...props} />,
    isOpen,
    onMouseDown: handleMouseDown,
    open,
  };
}
