import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

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

  const { Modal: HostInfoModal, ...hostInfoModal } = useModal();
  const { Modal: GuestInfoModal, ...guestInfoModal } = useModal();
  const { Modal: CancelInfoModal, ...cancelInfoModal } = useModal();

  return (
    <Menu label="Modem Game Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={host} label="Host (Dials)" onClick={onHostClick} onMouseDown={hostInfoModal.onMouseDown} />
        <HostInfoModal>
          The host sets up the game options, chooses the number to dial, and places the call.
        </HostInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={guest}
          label="Guest (Answers)"
          onClick={onGuestClick}
          onMouseDown={guestInfoModal.onMouseDown}
        />
        <GuestInfoModal>The guest waits for the host to call and set up the game.</GuestInfoModal>
      </MenuItem>
      <MenuItem>{configButton}</MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
