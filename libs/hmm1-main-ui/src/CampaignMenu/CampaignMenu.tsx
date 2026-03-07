import { Leader, leaders } from '@heroesjs/hmm1-core';
import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, playAssets } from './assets';

const labels: Readonly<Record<Leader, string>> = {
  [Leader.LordAlamar]: 'Play Lord Alamar',
  [Leader.LordIronfist]: 'Play Lord Ironfist',
  [Leader.LordSlayer]: 'Play Lord Slayer',
  [Leader.QueenLamanda]: 'Play Queen Lamanda',
};

const infos: Readonly<Record<Leader, string>> = {
  [Leader.LordAlamar]: 'Play the role of Lord Alamar.',
  [Leader.LordIronfist]: 'Play the role of Lord Ironfist.',
  [Leader.LordSlayer]: 'Play the role of Lord Slayer.',
  [Leader.QueenLamanda]: 'Play the role of Queen Lamanda.',
};

interface CampaignMenuProps {
  readonly onCancelClick?: () => void;
  readonly onPlayClick?: (leader: Leader) => void;
  readonly x?: number;
  readonly y?: number;
}

export function CampaignMenu({ onCancelClick, onPlayClick, x, y }: CampaignMenuProps) {
  const modals = {
    [Leader.LordAlamar]: useModal(),
    [Leader.LordIronfist]: useModal(),
    [Leader.LordSlayer]: useModal(),
    [Leader.QueenLamanda]: useModal(),
  };

  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label="Campaign Menu" x={x} y={y}>
      {leaders.map((leader) => {
        const [Modal, modal] = modals[leader];

        return (
          <MenuItem key={leader}>
            <Button
              assets={playAssets[leader]}
              label={labels[leader]}
              onClick={() => onPlayClick?.(leader)}
              onMouseDown={modal.onMouseDown}
            />
            <Modal>{infos[leader]}</Modal>
          </MenuItem>
        );
      })}
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
