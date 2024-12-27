import { Button, Menu, MenuItem } from '../../base';
import type { PositionProps } from '../../core';

import campaignGameDisabled from './assets/campaign-game/disabled.png';
import campaignGameEnabled from './assets/campaign-game/enabled.png';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import multiPlayerGameDisabled from './assets/multi-player-game/disabled.png';
import multiPlayerGameEnabled from './assets/multi-player-game/enabled.png';
import standardGameDisabled from './assets/standard-game/disabled.png';
import standardGameEnabled from './assets/standard-game/enabled.png';

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
      <Button
        assets={{
          disabled: standardGameDisabled,
          enabled: standardGameEnabled,
        }}
        label="Standard Game"
        onClick={onStandardGameClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: campaignGameDisabled,
          enabled: campaignGameEnabled,
        }}
        label="Campaign Game"
        onClick={onCampaignGameClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: multiPlayerGameDisabled,
          enabled: multiPlayerGameEnabled,
        }}
        label="Multi-Player Game"
        onClick={onMultiPlayerGameClick}
      />
    </MenuItem>
    <MenuItem />
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
