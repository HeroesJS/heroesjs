import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, Modal, useInfoModal } from '@heroesjs/hmm1-core-ui';

import { cancel, directConnect, hotSeat, modem, network } from './assets';

interface MultiPlayerGameTypeMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onHotSeatClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
}

export function MultiPlayerGameTypeMenu({
  onCancelClick,
  onDirectConnectClick,
  onHotSeatClick,
  onModemClick,
  onNetworkClick,
  x,
  y,
}: MultiPlayerGameTypeMenuProps) {
  const hotSeatInfoModal = useInfoModal();
  const networkInfoModal = useInfoModal();
  const modemInfoModal = useInfoModal();
  const directConnectInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label="Multi-Player Game Type Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={hotSeat} label="Hot Seat" onClick={onHotSeatClick} onMouseDown={hotSeatInfoModal.onMouseDown} />
        <Modal open={hotSeatInfoModal.isOpen} size={1} x={177} y={29}>
          Play a Hot Seat game, where 2 to 4 players play around the same computer, switching into the 'Hot Seat' when
          it is their turn.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button assets={network} label="Network" onClick={onNetworkClick} onMouseDown={networkInfoModal.onMouseDown} />
        <Modal open={networkInfoModal.isOpen} size={1} x={177} y={29}>
          Play a network game, where 2 players use their own computers connected through a LAN (Local Area Network).
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button assets={modem} label="Modem" onClick={onModemClick} onMouseDown={modemInfoModal.onMouseDown} />
        <Modal open={modemInfoModal.isOpen} size={1} x={177} y={29}>
          Play a modem game, where 2 players use ther own computers connected over the phone lines using modems.{' '}
          {/* TODO: ther? */}
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={directConnect}
          label="Direct Connect"
          onClick={onDirectConnectClick}
          onMouseDown={directConnectInfoModal.onMouseDown}
        />
        <Modal open={directConnectInfoModal.isOpen} size={1} x={177} y={29}>
          Play a direct connect game, where 2 players use ther own computers directly connected through their serial
          port by a null modem. {/* TODO: ther? */}
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
          Cancel back to the main menu.
        </Modal>
      </MenuItem>
    </Menu>
  );
}
