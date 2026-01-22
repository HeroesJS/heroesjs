import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, guest, host } from './assets';

interface NetworkGameMenuProps {
  readonly onCancelClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onHostClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function NetworkGameMenu({ onCancelClick, onGuestClick, onHostClick, x, y }: NetworkGameMenuProps) {
  const [HostInfoModal, hostInfoModal] = useModal();
  const [GuestInfoModal, guestInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label="Network Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host" onClick={onHostClick} onMouseDown={hostInfoModal.onMouseDown} />
        <HostInfoModal>
          The host sets up the game options.{'  '}There can only be one host per network game.
        </HostInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={guest} label="Guest" onClick={onGuestClick} onMouseDown={guestInfoModal.onMouseDown} />
        <GuestInfoModal size={1}>
          The guest waits for the host to set up the game, then is automatically added in.{'  '}There can only be one
          guest per network game.
        </GuestInfoModal>
      </MenuItem>
      <MenuItem />
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
