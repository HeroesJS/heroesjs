import { useTranslation } from 'react-i18next';

import { Modal } from '@heroesjs/hmm1-core-ui';

interface WaitingForRingModalProps {
  readonly onCancelClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function WaitingForRingModal({ onCancelClick, open, x, y }: WaitingForRingModalProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.waitingForRingModal' });

  return (
    <Modal onCancelClick={onCancelClick} open={open} size={1} type="cancel" x={x} y={y}>
      {t(($) => $.message)}
    </Modal>
  );
}
