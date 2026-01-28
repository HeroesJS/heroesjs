import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { campaignGame, cancel, multiPlayerGame, standardGame } from './assets';

interface GameTypeMenuProps {
  readonly onCampaignGameClick?: () => void;
  readonly onCancelClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onStandardGameClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function GameTypeMenu({
  onCampaignGameClick,
  onCancelClick,
  onMultiPlayerGameClick,
  onStandardGameClick,
  x,
  y,
}: GameTypeMenuProps) {
  const [StandardGameInfoModal, standardGameInfoModal] = useModal();
  const [CampaignGameInfoModal, campaignGameInfoModal] = useModal();
  const [MultiPlayerGameInfoModal, multiPlayerGameInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label="Game Type Menu" x={x} y={y}>
      <MenuItem>
        <Button
          assets={standardGame}
          label="Standard Game"
          onClick={onStandardGameClick}
          onMouseDown={standardGameInfoModal.onMouseDown}
        />
        <StandardGameInfoModal>A single player game playing out a single map.</StandardGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={campaignGame}
          label="Campaign Game"
          onClick={onCampaignGameClick}
          onMouseDown={campaignGameInfoModal.onMouseDown}
        />
        <CampaignGameInfoModal>A single player game playing through a series of maps.</CampaignGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={multiPlayerGame}
          label="Multi-Player Game"
          onClick={onMultiPlayerGameClick}
          onMouseDown={multiPlayerGameInfoModal.onMouseDown}
        />
        <MultiPlayerGameInfoModal size={1}>
          A multi-player game, with several human players competing against each other on a single map.
        </MultiPlayerGameInfoModal>
      </MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
