import { Button, Menu, MenuItem } from '../../base';
import type { PositionProps } from '../../core';

import loadGameDisabled from './assets/load-game-disabled.png';
import loadGameEnabled from './assets/load-game.png';
import newGameDisabled from './assets/new-game-disabled.png';
import newGameEnabled from './assets/new-game.png';
import quitDisabled from './assets/quit-disabled.png';
import quitEnabled from './assets/quit.png';
import viewCreditsDisabled from './assets/view-credits-disabled.png';
import viewCreditsEnabled from './assets/view-credits.png';
import viewHighScoresDisabled from './assets/view-high-scores-disabled.png';
import viewHighScoresEnabled from './assets/view-high-scores.png';

interface Props extends PositionProps {
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
}

export const MainMenu = ({
  onLoadGameClick,
  onNewGameClick,
  onQuitClick,
  onViewCreditsClick,
  onViewHighScoresClick,
  x,
  y,
}: Props) => (
  <Menu label="Main Menu" x={x} y={y}>
    <MenuItem>
      <Button
        assets={{
          disabled: newGameDisabled,
          enabled: newGameEnabled,
        }}
        label="New Game"
        onClick={onNewGameClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: loadGameDisabled,
          enabled: loadGameEnabled,
        }}
        label="Load Game"
        onClick={onLoadGameClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: viewHighScoresDisabled,
          enabled: viewHighScoresEnabled,
        }}
        label="View High Scores"
        onClick={onViewHighScoresClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: viewCreditsDisabled,
          enabled: viewCreditsEnabled,
        }}
        label="View Credits"
        onClick={onViewCreditsClick}
      />
    </MenuItem>
    <MenuItem>
      <Button
        assets={{
          disabled: quitDisabled,
          enabled: quitEnabled,
        }}
        label="Quit"
        onClick={onQuitClick}
      />
    </MenuItem>
  </Menu>
);
