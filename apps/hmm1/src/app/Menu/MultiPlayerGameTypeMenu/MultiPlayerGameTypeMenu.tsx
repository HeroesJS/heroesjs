import { useTranslation } from 'react-i18next';

import { type ButtonAssets, Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';

import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import directConnectDisabled from './assets/direct-connect/disabled.png';
import directConnectEnabled from './assets/direct-connect/enabled.png';
import hotSeatDisabled from './assets/hot-seat/disabled.png';
import hotSeatEnabled from './assets/hot-seat/enabled.png';
import modemDisabled from './assets/modem/disabled.png';
import modemEnabled from './assets/modem/enabled.png';
import networkDisabled from './assets/network/disabled.png';
import networkEnabled from './assets/network/enabled.png';

const hotSeatButtonAssets: ButtonAssets = {
  disabled: hotSeatDisabled,
  enabled: hotSeatEnabled,
};

const networkButtonAssets: ButtonAssets = {
  disabled: networkDisabled,
  enabled: networkEnabled,
};

const modemButtonAssets: ButtonAssets = {
  disabled: modemDisabled,
  enabled: modemEnabled,
};

const directConnectButtonAssets: ButtonAssets = {
  disabled: directConnectDisabled,
  enabled: directConnectEnabled,
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

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
      <MenuButton assets={hotSeatButtonAssets} label={t('hotSeat')} onClick={onHotSeatClick} />
      <MenuButton assets={networkButtonAssets} label={t('network')} onClick={onNetworkClick} />
      <MenuButton assets={modemButtonAssets} label={t('modem')} onClick={onModemClick} />
      <MenuButton assets={directConnectButtonAssets} label={t('directConnect')} onClick={onDirectConnectClick} />
      <MenuButton assets={cancelButtonAssets} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
