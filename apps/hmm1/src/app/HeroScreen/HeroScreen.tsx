import { type ComponentProps, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { HeroWindow } from '@heroesjs/hmm1-adventure-ui';
import { Modal, useModal } from '@heroesjs/hmm1-base-ui';

import { heroes } from '../state';

type Props = Pick<ComponentProps<typeof HeroWindow>, 'onExitClick'>;

export const HeroScreen = ({ onExitClick }: Props) => {
  const { t } = useTranslation('core');

  const params = useParams<{ readonly index: string }>();

  const notImplementedModal = useModal();

  const index = parseInt(params.index ?? '');

  const hero = heroes[index];

  useEffect(() => {
    if (!hero) {
      onExitClick?.();
    }
  }, [hero, onExitClick]);

  if (!hero) {
    return null;
  }

  return (
    <>
      <HeroWindow
        allowDismiss
        hero={hero}
        onDismissClick={notImplementedModal.open}
        onDismissTroop={notImplementedModal.open}
        onExitClick={onExitClick}
        onKingdomOverviewClick={notImplementedModal.open}
        onMoveTroop={notImplementedModal.open}
      />
      <Modal onConfirmClick={notImplementedModal.close} open={notImplementedModal.isOpen} type="okay" x={177} y={29}>
        {t('notImplemented')}
      </Modal>
    </>
  );
};
