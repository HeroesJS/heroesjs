import { useTranslation } from 'react-i18next';

import { type ButtonAssets, Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import campaignGameDisabled from './assets/campaign-game/disabled.png';
import campaignGameEnabled from './assets/campaign-game/enabled.png';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import multiPlayerGameDisabled from './assets/multi-player-game/disabled.png';
import multiPlayerGameEnabled from './assets/multi-player-game/enabled.png';
import standardGameDisabled from './assets/standard-game/disabled.png';
import standardGameEnabled from './assets/standard-game/enabled.png';

const standardGameButtonAssets = {
  disabled: standardGameDisabled,
  enabled: standardGameEnabled,
};

const campaignGameButtonAssets: ButtonAssets = {
  disabled: campaignGameDisabled,
  enabled: campaignGameEnabled,
};

const multiPlayerGameButtonAssets: ButtonAssets = {
  disabled: multiPlayerGameDisabled,
  enabled: multiPlayerGameEnabled,
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

interface Props extends PositionProps {
  readonly onCampaignGameClick?: () => void;
  readonly onCancelClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onStandardGameClick?: () => void;
}

export const GameTypeMenu = ({
  onCampaignGameClick,
  onCancelClick,
  onMultiPlayerGameClick,
  onStandardGameClick,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.gameTypeMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton assets={standardGameButtonAssets} label={t('standardGame')} onClick={onStandardGameClick} />
      <MenuButton assets={campaignGameButtonAssets} label={t('campaignGame')} onClick={onCampaignGameClick} />
      <MenuButton assets={multiPlayerGameButtonAssets} label={t('multiPlayerGame')} onClick={onMultiPlayerGameClick} />
      <MenuSeparator />
      <MenuButton assets={cancelButtonAssets} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};
