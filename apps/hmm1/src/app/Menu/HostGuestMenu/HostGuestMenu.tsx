import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, MenuSeparator, Modal, type PositionProps, useModal } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly detailed?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export const HostGuestMenu = ({ detailed, onCancelClick, onGuestClick, onHostClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.hostGuestMenu' });

  const hostInfoModal = useModal();
  const guestInfoModal = useModal();
  const cancelInfoModal = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={detailed ? assets.hostDialsButton : assets.hostButton}
        label={t(detailed ? 'hostDetail' : 'host')}
        onClick={onHostClick}
        onMouseDown={hostInfoModal.onMouseDown}
      />
      <Modal open={hostInfoModal.isOpen} x={177} y={29}>
        {t(detailed ? 'hostDetailInfo' : 'hostInfo')}
      </Modal>
      <MenuButton
        assets={detailed ? assets.guestAnswersButton : assets.guestButton}
        label={t(detailed ? 'guestDetail' : 'guest')}
        onClick={onGuestClick}
        onMouseDown={guestInfoModal.onMouseDown}
      />
      <Modal open={guestInfoModal.isOpen} size={!detailed ? 1 : undefined} x={177} y={29}>
        {t(detailed ? 'guestDetailInfo' : 'guestInfo')}
      </Modal>
      <MenuSeparator />
      <MenuSeparator />
      <MenuButton
        assets={assets.cancelButton}
        label={t('cancel')}
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
      />
      <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Menu>
  );
};
