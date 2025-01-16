import { Button, type ButtonAssets, Menu, MenuItem, type PositionProps } from '../../base';

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
}: Props) => (
  <Menu label="Game Type Menu" x={x} y={y}>
    <MenuItem>
      <Button assets={standardGameButtonAssets} label="Standard Game" onClick={onStandardGameClick} />
    </MenuItem>
    <MenuItem>
      <Button assets={campaignGameButtonAssets} label="Campaign Game" onClick={onCampaignGameClick} />
    </MenuItem>
    <MenuItem>
      <Button assets={multiPlayerGameButtonAssets} label="Multi-Player Game" onClick={onMultiPlayerGameClick} />
    </MenuItem>
    <MenuItem />
    <MenuItem>
      <Button assets={cancelButtonAssets} label="Cancel" onClick={onCancelClick} />
    </MenuItem>
  </Menu>
);
