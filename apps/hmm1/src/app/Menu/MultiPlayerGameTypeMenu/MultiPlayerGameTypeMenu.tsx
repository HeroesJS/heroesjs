import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';

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

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton assets={assets.hotSeatButton} label={t('hotSeat')} onClick={onHotSeatClick} />
      <MenuButton assets={assets.networkButton} label={t('network')} onClick={onNetworkClick} />
      <MenuButton assets={assets.modemButton} label={t('modem')} onClick={onModemClick} />
      <MenuButton assets={assets.directConnectButton} label={t('directConnect')} onClick={onDirectConnectClick} />
      <MenuButton assets={assets.cancelButton} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
