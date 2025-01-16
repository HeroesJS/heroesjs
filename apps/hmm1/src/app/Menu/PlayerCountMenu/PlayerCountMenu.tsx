import { Button, type ButtonAssets, Menu, MenuItem, type PositionProps } from '../../base';

import twoPlayersDisabled from './assets/2-players/disabled.png';
import twoPlayersEnabled from './assets/2-players/enabled.png';
import threePlayersDisabled from './assets/3-players/disabled.png';
import threePlayersEnabled from './assets/3-players/enabled.png';
import fourPlayersDisabled from './assets/4-players/disabled.png';
import fourPlayersEnabled from './assets/4-players/enabled.png';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';

const assets: Readonly<Record<number, ButtonAssets>> = {
  2: {
    disabled: twoPlayersDisabled,
    enabled: twoPlayersEnabled,
  },
  3: {
    disabled: threePlayersDisabled,
    enabled: threePlayersEnabled,
  },
  4: {
    disabled: fourPlayersDisabled,
    enabled: fourPlayersEnabled,
  },
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onCountClick?: (value: number) => void;
}

export const PlayerCountMenu = ({ onCancelClick, onCountClick, x, y }: Props) => {
  return (
    <Menu label="Player Count Menu" x={x} y={y}>
      {Object.keys(assets)
        .map(Number)
        .map((count) => (
          <MenuItem key={count}>
            <Item onClick={onCountClick} value={count} />
          </MenuItem>
        ))}
      <MenuItem />
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

const Item = ({ onClick, value }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <Button assets={assets[value]} label={`${value} Players`} onClick={handleClick} />;
};
