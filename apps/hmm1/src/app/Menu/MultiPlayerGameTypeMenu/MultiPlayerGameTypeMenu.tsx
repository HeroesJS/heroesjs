import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, Modal, type PositionProps, useModal } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onHotSeatClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
}

export const MultiPlayerGameTypeMenu = ({
  onCancelClick,
  onDirectConnectClick,
  onHotSeatClick,
  onModemClick,
  onNetworkClick,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.multiPlayerGameTypeMenu' });

  const hotSeatInfo = useModal();
  const networkInfo = useModal();
  const modemInfo = useModal();
  const directConnectInfo = useModal();
  const cancelInfo = useModal();

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        <MenuButton
          assets={assets.hotSeatButton}
          label={t('hotSeat')}
          onClick={onHotSeatClick}
          onRightButtonDown={hotSeatInfo.open}
          onRightButtonUp={hotSeatInfo.close}
        />
        <MenuButton
          assets={assets.networkButton}
          label={t('network')}
          onClick={onNetworkClick}
          onRightButtonDown={networkInfo.open}
          onRightButtonUp={networkInfo.close}
        />
        <MenuButton
          assets={assets.modemButton}
          label={t('modem')}
          onClick={onModemClick}
          onRightButtonDown={modemInfo.open}
          onRightButtonUp={modemInfo.close}
        />
        <MenuButton
          assets={assets.directConnectButton}
          label={t('directConnect')}
          onClick={onDirectConnectClick}
          onRightButtonDown={directConnectInfo.open}
          onRightButtonUp={directConnectInfo.close}
        />
        <MenuButton
          assets={assets.cancelButton}
          label={t('cancel')}
          onClick={onCancelClick}
          onRightButtonDown={cancelInfo.open}
          onRightButtonUp={cancelInfo.close}
        />
      </Menu>
      <Modal open={hotSeatInfo.isOpen} size={1} x={177} y={29}>
        {t('hotSeatInfo')}
      </Modal>
      <Modal open={networkInfo.isOpen} size={1} x={177} y={29}>
        {t('networkInfo')}
      </Modal>
      <Modal open={modemInfo.isOpen} size={1} x={177} y={29}>
        {t('modemInfo')}
      </Modal>
      <Modal open={directConnectInfo.isOpen} size={1} x={177} y={29}>
        {t('directConnectInfo')}
      </Modal>
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};
