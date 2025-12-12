import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import type { PositionProps } from '../PositionedComponent';
import { cancel, guest, host } from './assets';

interface DirectConnectGameMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export function DirectConnectGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: DirectConnectGameMenuProps) {
  return (
    <Menu label="Direct Connect Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host" onClick={onHostClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label="Guest" onClick={onGuestClick} />
      </MenuItem>
      <MenuItem />
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
