import { type ComponentProps, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HeroWindow } from '@heroesjs/hmm1-adventure-ui';
import { Modal, useModal } from '@heroesjs/hmm1-base-ui';

import { getSelectedHero } from '../gameSlice';
import { useAppSelector } from '../hooks';

type Props = Pick<ComponentProps<typeof HeroWindow>, 'onExitClick'>;

export const HeroScreen = ({ onExitClick }: Props) => {
  const { t } = useTranslation('core');

  const notImplementedModal = useModal();

  const hero = useAppSelector(getSelectedHero);

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
