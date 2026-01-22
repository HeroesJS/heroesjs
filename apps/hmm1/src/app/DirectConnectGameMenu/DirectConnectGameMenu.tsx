import type { ButtonAssets } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem } from '@heroesjs/hmm1-core-ui';

import { noConfig, withConfig } from './assets';

interface DirectConnectGameMenuProps {
  readonly allowConfiguration?: boolean;
  readonly onCancelClick?: () => void;
  readonly onConfigClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function DirectConnectGameMenu({
  allowConfiguration,
  onCancelClick,
  onConfigClick,
  onGuestClick,
  onHostClick,
  x,
  y,
}: DirectConnectGameMenuProps) {
  const { cancel, guest, host } = allowConfiguration ? withConfig : noConfig;

  const configButton = allowConfiguration && (
    <Button assets={withConfig.config as ButtonAssets} label="Config" onClick={onConfigClick} />
  );

  return (
    <Menu label="Direct Connect Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host" onClick={onHostClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label="Guest" onClick={onGuestClick} />
      </MenuItem>
      <MenuItem>{configButton}</MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
