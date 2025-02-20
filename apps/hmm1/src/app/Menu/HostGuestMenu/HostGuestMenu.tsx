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

  const hostInfo = useModal();
  const guestInfo = useModal();
  const cancelInfo = useModal();

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        <MenuButton
          {...hostInfo.handlers}
          assets={detailed ? assets.hostDialsButton : assets.hostButton}
          label={t(detailed ? 'hostDetail' : 'host')}
          onClick={onHostClick}
        />
        <MenuButton
          {...guestInfo.handlers}
          assets={detailed ? assets.guestAnswersButton : assets.guestButton}
          label={t(detailed ? 'guestDetail' : 'guest')}
          onClick={onGuestClick}
        />
        <MenuSeparator />
        <MenuSeparator />
        <MenuButton {...cancelInfo.handlers} assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
      </Menu>
      <Modal open={hostInfo.isOpen} x={177} y={29}>
        {t(detailed ? 'hostDetailInfo' : 'hostInfo')}
      </Modal>
      <Modal open={guestInfo.isOpen} size={!detailed ? 1 : undefined} x={177} y={29}>
        {t(detailed ? 'guestDetailInfo' : 'guestInfo')}
      </Modal>
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};
