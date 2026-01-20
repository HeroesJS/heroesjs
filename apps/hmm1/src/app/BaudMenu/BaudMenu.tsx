import type { ButtonAssets, PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem } from '@heroesjs/hmm1-core-ui';

import { baud19200, baud2400, baud38400, baud9600, cancel } from './assets';

interface BaudMenuProps extends PositionProps {
  readonly onValueClick?: (value: number) => void;
  readonly onCancelClick?: () => void;
}

export function BaudMenu({ onCancelClick, onValueClick, x, y }: BaudMenuProps) {
  const assets: Record<number, ButtonAssets> = {
    19200: baud19200,
    2400: baud2400,
    38400: baud38400,
    9600: baud9600,
  };

  return (
    <Menu label="Baud Menu" x={x} y={y}>
      {[2400, 9600, 19200, 38400].map((value) => (
        <MenuItem key={value}>
          <Button assets={assets[value]} label={`${value} Baud`} onClick={() => onValueClick?.(value)} />
        </MenuItem>
      ))}
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
