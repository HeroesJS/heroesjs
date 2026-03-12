import { useTranslation } from 'react-i18next';

import { Modal } from '@heroesjs/hmm1-core-ui';

interface WaitingForDirectConnectionModalProps {
  readonly onCancelClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function WaitingForDirectConnectionModal({ onCancelClick, open, x, y }: WaitingForDirectConnectionModalProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.waitingForDirectConnectionModal' });

  return (
    <Modal onCancelClick={onCancelClick} open={open} size={2} type="cancel" x={x} y={y}>
      {t(($) => $.message)}
    </Modal>
  );
}
