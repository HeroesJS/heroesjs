import { range } from 'lodash';

import { Button, type ButtonAssets, Menu, MenuItem, type PositionProps } from '../../base';

import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import com1Disabled from './assets/com-1/disabled.png';
import com1Enabled from './assets/com-1/enabled.png';
import com2Disabled from './assets/com-2/disabled.png';
import com2Enabled from './assets/com-2/enabled.png';
import com3Disabled from './assets/com-3/disabled.png';
import com3Enabled from './assets/com-3/enabled.png';
import com4Disabled from './assets/com-4/disabled.png';
import com4Enabled from './assets/com-4/enabled.png';

const assets: Readonly<Record<number, ButtonAssets>> = {
  1: {
    disabled: com1Disabled,
    enabled: com1Enabled,
  },
  2: {
    disabled: com2Disabled,
    enabled: com2Enabled,
  },
  3: {
    disabled: com3Disabled,
    enabled: com3Enabled,
  },
  4: {
    disabled: com4Disabled,
    enabled: com4Enabled,
  },
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onPortClick?: (value: number) => void;
}

export const ComPortMenu = ({ onCancelClick, onPortClick, x, y }: Props) => {
  return (
    <Menu label="Com Port Menu" x={x} y={y}>
      {range(1, 5).map((i) => (
        <MenuItem key={i}>
          <Item onClick={onPortClick} value={i} />
        </MenuItem>
      ))}
      <MenuItem>
        <Button assets={cancelButtonAssets} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly value: number;
}

const Item = ({ value, onClick }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <Button assets={assets[value]} label={`Com-${value}`} onClick={handleClick} />;
};
