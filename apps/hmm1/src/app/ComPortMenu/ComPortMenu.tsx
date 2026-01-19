import { range } from 'lodash';

import type { ButtonAssets, PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem } from '@heroesjs/hmm1-core-ui';

import { cancel, com1, com2, com3, com4 } from './assets';

interface ComPortMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onValueClick?: (value: number) => void;
}

export function ComPortMenu({ onCancelClick, onValueClick, x, y }: ComPortMenuProps) {
  const assets: Record<number, ButtonAssets> = {
    1: com1,
    2: com2,
    3: com3,
    4: com4,
  };

  return (
    <Menu label="COM Port Menu" x={x} y={y}>
      {range(1, 5).map((port) => (
        <MenuItem key={port}>
          <Button assets={assets[port]} label={`COM ${port}`} onClick={() => onValueClick?.(port)} />
        </MenuItem>
      ))}
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
