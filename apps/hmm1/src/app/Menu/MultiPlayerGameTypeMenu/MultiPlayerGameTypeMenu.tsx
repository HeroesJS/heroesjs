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
  return (
    <Menu label="Multi-Player Game Type Menu" x={x} y={y}>
      <MenuButton assets={assets.hotSeatButton} label="Hot Seat" onClick={onHotSeatClick} />
      <MenuButton assets={assets.networkButton} label="Network" onClick={onNetworkClick} />
      <MenuButton assets={assets.modemButton} label="Modem" onClick={onModemClick} />
      <MenuButton assets={assets.directConnectButton} label="Direct Connect" onClick={onDirectConnectClick} />
      <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
    </Menu>
  );
};
