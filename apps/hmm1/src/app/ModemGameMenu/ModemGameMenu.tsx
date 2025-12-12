import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import type { PositionProps } from '../PositionedComponent';
import { cancel, guest, host } from './assets';

interface ModemGameMenuProps extends PositionProps {
  readonly onHostClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function ModemGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: ModemGameMenuProps) {
  return (
    <Menu label="Modem Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host (Dials)" onClick={onHostClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label="Guest (Answers)" onClick={onGuestClick} />
      </MenuItem>
      <MenuItem />
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
