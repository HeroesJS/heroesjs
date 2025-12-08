import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { Modal, useInfoModal } from '../Modal';
import type { PositionProps } from '../PositionedComponent';
import { campaignGame, cancel, multiPlayerGame, standardGame } from './assets';

interface GameTypeMenuProps extends PositionProps {
  readonly label?: string;
  readonly onCampaignGameClick?: () => void;
  readonly onCancelClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onStandardGameClick?: () => void;
}

export function GameTypeMenu({
  label = 'Game Type Menu',
  onCampaignGameClick,
  onCancelClick,
  onMultiPlayerGameClick,
  onStandardGameClick,
  x,
  y,
}: GameTypeMenuProps) {
  const standardGameInfoModal = useInfoModal();
  const campaignGameInfoModal = useInfoModal();
  const multiPlayerGameInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label={label} x={x} y={y}>
      <MenuItem>
        <Button
          assets={standardGame}
          label="Standard Game"
          onClick={onStandardGameClick}
          onMouseDown={standardGameInfoModal.onMouseDown}
        />
        <Modal open={standardGameInfoModal.open} x={177} y={29}>
          A single player game playing out a single map.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={campaignGame}
          label="Campaign Game"
          onClick={onCampaignGameClick}
          onMouseDown={campaignGameInfoModal.onMouseDown}
        />
        <Modal open={campaignGameInfoModal.open} x={177} y={29}>
          A single player game playing through a series of maps.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={multiPlayerGame}
          label="Multi-Player Game"
          onClick={onMultiPlayerGameClick}
          onMouseDown={multiPlayerGameInfoModal.onMouseDown}
        />
        <Modal open={multiPlayerGameInfoModal.open} size={1} x={177} y={29}>
          A multi-player game, with several human players competing against each other on a single map.
        </Modal>
      </MenuItem>
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
