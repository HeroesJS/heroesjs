import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('main', { keyPrefix: 'component.gameTypeMenu' });

  const [StandardGameInfoModal, standardGameInfoModal] = useModal();
  const [CampaignGameInfoModal, campaignGameInfoModal] = useModal();
  const [MultiPlayerGameInfoModal, multiPlayerGameInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label={t('label')} x={x} y={y}>
      <MenuItem>
        <Button
          assets={standardGame}
          label={t('standardGame.label')}
          onClick={onStandardGameClick}
          onMouseDown={standardGameInfoModal.onMouseDown}
        />
        <StandardGameInfoModal>{t('standardGame.info')}</StandardGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={campaignGame}
          label={t('campaignGame.label')}
          onClick={onCampaignGameClick}
          onMouseDown={campaignGameInfoModal.onMouseDown}
        />
        <CampaignGameInfoModal>{t('campaignGame.info')}</CampaignGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={multiPlayerGame}
          label={t('multiPlayerGame.label')}
          onClick={onMultiPlayerGameClick}
          onMouseDown={multiPlayerGameInfoModal.onMouseDown}
        />
        <MultiPlayerGameInfoModal size={1}>{t('multiPlayerGame.info')}</MultiPlayerGameInfoModal>
      </MenuItem>
      <MenuItem />
      <MenuItem>
        <Button
          assets={cancel}
          label={t('cancel.label')}
          onClick={onCancelClick}
          onMouseDown={cancelInfoModal.onMouseDown}
        />
        <CancelInfoModal>{t('cancel.info')}</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
