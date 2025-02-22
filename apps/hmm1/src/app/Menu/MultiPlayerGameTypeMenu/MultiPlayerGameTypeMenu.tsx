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
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        {...hotSeatInfo.handlers}
        assets={assets.hotSeatButton}
        label={t('hotSeat')}
        onClick={onHotSeatClick}
      />
      <Modal open={hotSeatInfo.isOpen} size={1} x={177} y={29}>
        {t('hotSeatInfo')}
      </Modal>
      <MenuButton
        {...networkInfo.handlers}
        assets={assets.networkButton}
        label={t('network')}
        onClick={onNetworkClick}
      />
      <Modal open={networkInfo.isOpen} size={1} x={177} y={29}>
        {t('networkInfo')}
      </Modal>
      <MenuButton {...modemInfo.handlers} assets={assets.modemButton} label={t('modem')} onClick={onModemClick} />
      <Modal open={modemInfo.isOpen} size={1} x={177} y={29}>
        {t('modemInfo')}
      </Modal>
      <MenuButton
        {...directConnectInfo.handlers}
        assets={assets.directConnectButton}
        label={t('directConnect')}
        onClick={onDirectConnectClick}
      />
      <Modal open={directConnectInfo.isOpen} size={1} x={177} y={29}>
        {t('directConnectInfo')}
      </Modal>
      <MenuButton {...cancelInfo.handlers} assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Menu>
  );
};
