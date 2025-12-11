import { range } from 'lodash';

import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { PositionProps } from '../PositionedComponent';
import { cancel, countAssets } from './assets';

interface PlayerCountMenuProps extends PositionProps {
  readonly onValueClick?: (value: number) => void;
  readonly onCancelClick?: () => void;
}

export function PlayerCountMenu({ onCancelClick, onValueClick, x, y }: PlayerCountMenuProps) {
  return (
    <Menu label="Player Count Menu" x={x} y={y}>
      {range(2, 5).map((count) => (
        <MenuItem key={count}>
          <Button assets={countAssets[count]} label={`${count} Players`} onClick={() => onValueClick?.(count)} />
        </MenuItem>
      ))}
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
