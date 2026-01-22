import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

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
  const { Modal: HotSeatInfoModal, ...hotSeatInfoModal } = useModal();
  const { Modal: NetworkInfoModal, ...networkInfoModal } = useModal();
  const { Modal: ModemInfoModal, ...modemInfoModal } = useModal();
  const { Modal: DirectConnectInfoModal, ...directConnectInfoModal } = useModal();
  const { Modal: CancelInfoModal, ...cancelInfoModal } = useModal();

  return (
    <Menu label="Multi-Player Game Type Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={hotSeat} label="Hot Seat" onClick={onHotSeatClick} onMouseDown={hotSeatInfoModal.onMouseDown} />
        <HotSeatInfoModal size={1}>
          Play a Hot Seat game, where 2 to 4 players play around the same computer, switching into the 'Hot Seat' when
          it is their turn.
        </HotSeatInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={network} label="Network" onClick={onNetworkClick} onMouseDown={networkInfoModal.onMouseDown} />
        <NetworkInfoModal size={1}>
          Play a network game, where 2 players use their own computers connected through a LAN (Local Area Network).
        </NetworkInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={modem} label="Modem" onClick={onModemClick} onMouseDown={modemInfoModal.onMouseDown} />
        <ModemInfoModal size={1}>
          Play a modem game, where 2 players use ther own computers connected over the phone lines using modems.{' '}
          {/* TODO: ther? */}
        </ModemInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={directConnect}
          label="Direct Connect"
          onClick={onDirectConnectClick}
          onMouseDown={directConnectInfoModal.onMouseDown}
        />
        <DirectConnectInfoModal size={1}>
          Play a direct connect game, where 2 players use ther own computers directly connected through their serial
          port by a null modem. {/* TODO: ther? */}
        </DirectConnectInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
