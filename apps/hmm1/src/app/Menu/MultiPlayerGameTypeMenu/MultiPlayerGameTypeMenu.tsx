import { Button, Menu, MenuItem } from '../../base';
import type { PositionProps } from '../../core';

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
      <MenuItem>
        <Button
          assets={{
            disabled: hotSeatDisabled,
            enabled: hotSeatEnabled,
          }}
          label="Hot Seat"
          onClick={onHotSeatClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={{
            disabled: networkDisabled,
            enabled: networkEnabled,
          }}
          label="Network"
          onClick={onNetworkClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={{
            disabled: modemDisabled,
            enabled: modemEnabled,
          }}
          label="Modem"
          onClick={onModemClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={{
            disabled: directConnectDisabled,
            enabled: directConnectEnabled,
          }}
          label="Direct Connect"
          onClick={onDirectConnectClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={{
            disabled: cancelDisabled,
            enabled: cancelEnabled,
          }}
          label="Cancel"
          onClick={onCancelClick}
        />
      </MenuItem>
    </Menu>
  );
};
