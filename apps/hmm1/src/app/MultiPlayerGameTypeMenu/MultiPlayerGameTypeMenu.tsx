import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import type { PositionProps } from '../PositionedComponent';
import { cancel, directConnect, hotSeat, modem, network } from './assets';

interface MultiPlayerGameTypeMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onHotSeatClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
}

export function MultiPlayerGameTypeMenu({
  onCancelClick,
  onDirectConnectClick,
  onHotSeatClick,
  onModemClick,
  onNetworkClick,
  x,
  y,
}: MultiPlayerGameTypeMenuProps) {
  return (
    <Menu label="Multi-Player Game Type Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={hotSeat} label="Hot Seat" onClick={onHotSeatClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={network} label="Network" onClick={onNetworkClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={modem} label="Modem" onClick={onModemClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={directConnect} label="Direct Connect" onClick={onDirectConnectClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
