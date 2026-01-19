import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, Modal, useInfoModal } from '@heroesjs/hmm1-core-ui';

import { noConfig, withConfig } from './assets';

interface ModemGameMenuProps extends PositionProps {
  readonly allowConfiguration?: boolean;
  readonly onCancelClick?: () => void;
  readonly onConfigClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
}

export function ModemGameMenu({
  allowConfiguration,
  onCancelClick,
  onConfigClick,
  onGuestClick,
  onHostClick,
  x,
  y,
}: ModemGameMenuProps) {
  const { cancel, guest, host } = allowConfiguration ? withConfig : noConfig;

  const configButton = allowConfiguration && (
    <Button assets={withConfig.config} label="Config Modem" onClick={onConfigClick} />
  );

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
      <MenuItem>{configButton}</MenuItem>
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
