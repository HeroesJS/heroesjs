import { useTranslation } from 'react-i18next';

import { Modal } from '@heroesjs/hmm1-core-ui';

interface DialingTelephoneNumberModalProps {
  readonly onCancelClick?: () => void;
  readonly open: boolean;
  readonly value: string;
  readonly x?: number;
  readonly y?: number;
}

export function DialingTelephoneNumberModal({ onCancelClick, open, value, x, y }: DialingTelephoneNumberModalProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.dialingTelephoneNumberModal' });

  return (
    <Modal onCancelClick={onCancelClick} open={open} size={1} type="cancel" x={x} y={y}>
      {t(($) => $.message, { telephoneNumber: value })}
    </Modal>
  );
}
