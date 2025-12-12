import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { Modal, useInfoModal } from '../Modal';
import type { PositionProps } from '../PositionedComponent';
import { cancel, guest, host } from './assets';

interface NetworkGameMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export function NetworkGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: NetworkGameMenuProps) {
  const hostInfoModal = useInfoModal();
  const guestInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label="Network Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host" onClick={onHostClick} onMouseDown={hostInfoModal.onMouseDown} />
        <Modal open={hostInfoModal.open} x={177} y={29}>
          The host sets up the game options.{'  '}There can only be one host per network game.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label="Guest" onClick={onGuestClick} onMouseDown={guestInfoModal.onMouseDown} />
        <Modal open={guestInfoModal.open} size={1} x={177} y={29}>
          The guest waits for the host to set up the game, then is automatically added in.{'  '}There can only be one
          guest per network game.
        </Modal>
      </MenuItem>
      <MenuItem />
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <Modal open={cancelInfoModal.open} x={177} y={29}>
          Cancel back to the main menu.
        </Modal>
      </MenuItem>
    </Menu>
  );
}
