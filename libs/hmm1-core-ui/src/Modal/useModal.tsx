import type { ComponentProps, JSX, MouseEvent } from 'react';

import { useToggle } from '../useToggle';
import { Modal } from './Modal';

type ModalProps = Partial<ComponentProps<typeof Modal>> & {
  readonly autoClose?: boolean;
  readonly onClose?: () => void;
};

type UseModalOptions = ModalProps;

interface UseModalResult {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly Modal: (props: ModalProps) => JSX.Element;
  readonly onMouseDown: (e: MouseEvent) => void;
  readonly open: () => void;
}

export function useModal(options: UseModalOptions = {}): UseModalResult {
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
    Modal: (props) => <ModalWrapper onClose={close} open={isOpen} x={177} y={29} {...options} {...props} />,
    isOpen,
    onMouseDown: handleMouseDown,
    open,
  };
}

function ModalWrapper(props: ModalProps) {
  const { autoClose, onCancelClick, onClose, onConfirmClick, type } = props;

  return (
    <Modal
      {...props}
      onConfirmClick={onConfirmClick ?? (type === 'okay' && autoClose ? onClose : undefined)}
      onCancelClick={onCancelClick ?? (type === 'cancel' && autoClose ? onClose : undefined)}
    />
  );
}
