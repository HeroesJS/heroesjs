import type { ComponentProps, FunctionComponent, MouseEvent } from 'react';

import { Modal } from './Modal';
import { useToggle } from './useToggle';

type ModalProps = Partial<ComponentProps<typeof Modal>> & {
  readonly autoClose?: boolean;
  readonly onClose?: () => void;
};

type UseModalOptions = ModalProps;

interface ModalApi {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly onMouseDown: (e: MouseEvent) => void;
  readonly open: () => void;
}

type UseModalResult = [FunctionComponent<ModalProps>, ModalApi];

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

  return [
    (props) => <ModalWrapper onClose={close} open={isOpen} x={177} y={29} {...options} {...props} />,
    {
      close,
      isOpen,
      onMouseDown: handleMouseDown,
      open,
    },
  ];
}

function ModalWrapper(props: ModalProps) {
  const { autoClose, onCancelClick, onClose, onConfirmClick, type } = props;

  return (
    <Modal
      {...props}
      onCancelClick={onCancelClick ?? (type === 'cancel' && autoClose ? onClose : undefined)}
      onConfirmClick={onConfirmClick ?? (type === 'okay' && autoClose ? onClose : undefined)}
    />
  );
}
