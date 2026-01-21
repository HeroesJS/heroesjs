import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, Modal, useInfoModal } from '@heroesjs/hmm1-core-ui';

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
  const playLordIronfistInfoModal = useInfoModal();
  const playLordSlayerInfoModal = useInfoModal();
  const playQueenLamandaInfoModal = useInfoModal();
  const playLordAlamarInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label="Campaign Menu" x={x} y={y}>
      <MenuItem>
        <Button
          assets={playLordIronfist}
          label="Play Lord Ironfist"
          onClick={onPlayLordIronfistClick}
          onMouseDown={playLordIronfistInfoModal.onMouseDown}
        />
        <Modal open={playLordIronfistInfoModal.isOpen} x={177} y={29}>
          Play the role of Lord Ironfist.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordSlayer}
          label="Play Lord Slayer"
          onClick={onPlayLordSlayerClick}
          onMouseDown={playLordSlayerInfoModal.onMouseDown}
        />
        <Modal open={playLordSlayerInfoModal.isOpen} x={177} y={29}>
          Play the role of Lord Slayer.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playQueenLamanda}
          label="Play Queen Lamanda"
          onClick={onPlayQueenLamandaClick}
          onMouseDown={playQueenLamandaInfoModal.onMouseDown}
        />
        <Modal open={playQueenLamandaInfoModal.isOpen} x={177} y={29}>
          Play the role of Queen Lamanda.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordAlamar}
          label="Play Lord Alamar"
          onClick={onPlayLordAlamarClick}
          onMouseDown={playLordAlamarInfoModal.onMouseDown}
        />
        <Modal open={playLordAlamarInfoModal.isOpen} x={177} y={29}>
          Play the role of Lord Alamar.
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
