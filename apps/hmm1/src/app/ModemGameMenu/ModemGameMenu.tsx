import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { Modal, useInfoModal } from '../Modal';
import type { PositionProps } from '../PositionedComponent';
import { cancel, guest, host } from './assets';

interface ModemGameMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export function ModemGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: ModemGameMenuProps) {
  const hostInfoModal = useInfoModal();
  const guestInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label="Modem Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host (Dials)" onClick={onHostClick} onMouseDown={hostInfoModal.onMouseDown} />
        <Modal open={hostInfoModal.open} x={177} y={29}>
          The host sets up the game options, chooses the number to dial, and places the call.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={guest}
          label="Guest (Answers)"
          onClick={onGuestClick}
          onMouseDown={guestInfoModal.onMouseDown}
        />
        <Modal open={guestInfoModal.open} x={177} y={29}>
          The guest waits for the host to call and set up the game.
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
