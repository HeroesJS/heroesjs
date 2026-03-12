import { useTranslation } from 'react-i18next';

import { Modal } from '@heroesjs/hmm1-core-ui';

interface EnterTelephoneNumberModalProps {
  readonly onChange?: (value: string) => void;
  readonly onConfirmClick?: () => void;
  readonly open: boolean;
  readonly value: string;
  readonly x?: number;
  readonly y?: number;
}

export function EnterTelephoneNumberModal({ onChange, value, ...props }: EnterTelephoneNumberModalProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.enterTelephoneNumberModal' });

  return (
    <Modal
      {...props}
      inputLabel={t(($) => $.inputLabel)}
      inputValue={value}
      onInputValueChange={onChange}
      showInput
      size={2}
      type="okay"
    >
      {t(($) => $.message)}
    </Modal>
  );
}
