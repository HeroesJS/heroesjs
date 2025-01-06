import { Button, type ButtonAssets, Menu, MenuItem, type PositionProps } from '../../base';

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

export enum Campaign {
  LordAlamar = 'lord-alamar',
  LordIronfist = 'lord-ironfist',
  LordSlayer = 'lord-slayer',
  QueenLamanda = 'queen-lamanda',
}

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

const labels: Record<Campaign, string> = {
  [Campaign.LordAlamar]: 'Play Lord Alamar',
  [Campaign.LordIronfist]: 'Play Lord Ironfist',
  [Campaign.LordSlayer]: 'Play Lord Slayer',
  [Campaign.QueenLamanda]: 'Play Queen Lamanda',
};

interface Props extends PositionProps {
  readonly onCampaignClick?: (value: Campaign) => void;
  readonly onCancelClick?: () => void;
}

export const CampaignMenu = ({ onCampaignClick, onCancelClick, x, y }: Props) => (
  <Menu label="Campaign Menu" x={x} y={y}>
    {campaigns.map((campaign) => (
      <MenuItem key={campaign}>
        <Item onClick={onCampaignClick} value={campaign} />
      </MenuItem>
    ))}
    <MenuItem>
      <Button
        assets={{
          disabled: cancelDisabled,
          enabled: cancelEnabled,
        }}
        label="Cancel"
        onClick={onCancelClick}
      />
    </MenuItem>
  </Menu>
);

interface ItemProps {
  readonly onClick?: (value: Campaign) => void;
  readonly value: Campaign;
}

const Item = ({ onClick, value }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <Button assets={assets[value]} label={labels[value]} onClick={handleClick} />;
};
