import { useTranslation } from 'react-i18next';

import { type ButtonAssets, Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';
import { Campaign } from '@heroesjs/hmm1-core';

import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import playLordAlamarDisabled from './assets/play-lord-alamar/disabled.png';
import playLordAlamarEnabled from './assets/play-lord-alamar/enabled.png';
import playLordIronfistDisabled from './assets/play-lord-ironfist/disabled.png';
import playLordIronfistEnabled from './assets/play-lord-ironfist/enabled.png';
import playLordSlayerDisabled from './assets/play-lord-slayer/disabled.png';
import playLordSlayerEnabled from './assets/play-lord-slayer/enabled.png';
import playQueenLamandaDisabled from './assets/play-queen-lamanda/disabled.png';
import playQueenLamandaEnabled from './assets/play-queen-lamanda/enabled.png';

const campaigns = [Campaign.LordIronfist, Campaign.LordSlayer, Campaign.QueenLamanda, Campaign.LordAlamar] as const;

const assets: Record<Campaign, ButtonAssets> = {
  [Campaign.LordAlamar]: {
    disabled: playLordAlamarDisabled,
    enabled: playLordAlamarEnabled,
  },
  [Campaign.LordIronfist]: {
    disabled: playLordIronfistDisabled,
    enabled: playLordIronfistEnabled,
  },
  [Campaign.LordSlayer]: {
    disabled: playLordSlayerDisabled,
    enabled: playLordSlayerEnabled,
  },
  [Campaign.QueenLamanda]: {
    disabled: playQueenLamandaDisabled,
    enabled: playQueenLamandaEnabled,
  },
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({ onCampaignClick, onCancelClick, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  return (
    <Menu label={t('title')} x={x} y={y}>
      {campaigns.map((campaign) => (
        <Item key={campaign} onClick={onCampaignClick} value={campaign} />
      ))}
      <MenuButton assets={cancelButtonAssets} label={t('cancel')} onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly value: Campaign;
}

const Item = ({ onClick, value }: ItemProps) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.campaignMenu' });

  const handleClick = () => onClick?.(value);

  return <MenuButton assets={assets[value]} label={t(value)} onClick={handleClick} />;
};
