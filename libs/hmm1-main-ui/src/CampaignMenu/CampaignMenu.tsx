import { useTranslation } from 'react-i18next';

import { Leader, leaders } from '@heroesjs/hmm1-core';
import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, playAssets } from './assets';

interface CampaignMenuProps {
  readonly onCancelClick?: () => void;
  readonly onPlayClick?: (leader: Leader) => void;
  readonly x?: number;
  readonly y?: number;
}

export function CampaignMenu({ onCancelClick, onPlayClick, x, y }: CampaignMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  const modals = {
    [Leader.LordAlamar]: useModal(),
    [Leader.LordIronfist]: useModal(),
    [Leader.LordSlayer]: useModal(),
    [Leader.QueenLamanda]: useModal(),
  };

  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label={t(($) => $.label)} x={x} y={y}>
      {leaders.map((leader) => {
        const [Modal, modal] = modals[leader];

        return (
          <MenuItem key={leader}>
            <Button
              assets={playAssets[leader]}
              label={t(($) => $.play.label, { leader })}
              onClick={() => onPlayClick?.(leader)}
              onMouseDown={modal.onMouseDown}
            />
            <Modal>{t(($) => $.play.info, { leader })}</Modal>
          </MenuItem>
        );
      })}
      <MenuItem>
        <Button
          assets={cancel}
          label={t(($) => $.cancel.label)}
          onClick={onCancelClick}
          onMouseDown={cancelInfoModal.onMouseDown}
        />
        <CancelInfoModal>{t(($) => $.cancel.info)}</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
