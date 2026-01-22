import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, playLordAlamar, playLordIronfist, playLordSlayer, playQueenLamanda } from './assets';

interface CampaignMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onPlayLordAlamarClick?: () => void;
  readonly onPlayLordIronfistClick?: () => void;
  readonly onPlayLordSlayerClick?: () => void;
  readonly onPlayQueenLamandaClick?: () => void;
}

export function CampaignMenu({
  onCancelClick,
  onPlayLordAlamarClick,
  onPlayLordIronfistClick,
  onPlayLordSlayerClick,
  onPlayQueenLamandaClick,
  x,
  y,
}: CampaignMenuProps) {
  const { Modal: PlayLordIronfistInfoModal, ...playLordIronfistInfoModal } = useModal();
  const { Modal: PlayLordSlayerInfoModal, ...playLordSlayerInfoModal } = useModal();
  const { Modal: PlayQueenLamandaInfoModal, ...playQueenLamandaInfoModal } = useModal();
  const { Modal: PlayLordAlamarInfoModal, ...playLordAlamarInfoModal } = useModal();
  const { Modal: CancelInfoModal, ...cancelInfoModal } = useModal();

  return (
    <Menu label="Campaign Menu" x={x} y={y}>
      <MenuItem>
        <Button
          assets={playLordIronfist}
          label="Play Lord Ironfist"
          onClick={onPlayLordIronfistClick}
          onMouseDown={playLordIronfistInfoModal.onMouseDown}
        />
        <PlayLordIronfistInfoModal>Play the role of Lord Ironfist.</PlayLordIronfistInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordSlayer}
          label="Play Lord Slayer"
          onClick={onPlayLordSlayerClick}
          onMouseDown={playLordSlayerInfoModal.onMouseDown}
        />
        <PlayLordSlayerInfoModal>Play the role of Lord Slayer.</PlayLordSlayerInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playQueenLamanda}
          label="Play Queen Lamanda"
          onClick={onPlayQueenLamandaClick}
          onMouseDown={playQueenLamandaInfoModal.onMouseDown}
        />
        <PlayQueenLamandaInfoModal>Play the role of Queen Lamanda.</PlayQueenLamandaInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordAlamar}
          label="Play Lord Alamar"
          onClick={onPlayLordAlamarClick}
          onMouseDown={playLordAlamarInfoModal.onMouseDown}
        />
        <PlayLordAlamarInfoModal>Play the role of Lord Alamar.</PlayLordAlamarInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
