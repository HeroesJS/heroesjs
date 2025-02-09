import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

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
    <MenuButton assets={assets.standardGameButton} label="Standard Game" onClick={onStandardGameClick} />
    <MenuButton assets={assets.campaignGameButton} label="Campaign Game" onClick={onCampaignGameClick} />
    <MenuButton assets={assets.multiPlayerGameButton} label="Multi-Player Game" onClick={onMultiPlayerGameClick} />
    <MenuSeparator />
    <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
  </Menu>
);
