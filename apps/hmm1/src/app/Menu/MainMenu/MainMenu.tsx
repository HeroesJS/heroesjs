import { type ButtonAssets, Menu, MenuButton, type PositionProps } from '../../base';

import loadGameDisabled from './assets/load-game/disabled.png';
import loadGameEnabled from './assets/load-game/enabled.png';
import newGameDisabled from './assets/new-game/disabled.png';
import newGameEnabled from './assets/new-game/enabled.png';
import quitDisabled from './assets/quit/disabled.png';
import quitEnabled from './assets/quit/enabled.png';
import viewCreditsDisabled from './assets/view-credits/disabled.png';
import viewCreditsEnabled from './assets/view-credits/enabled.png';
import viewHighScoresDisabled from './assets/view-high-scores/disabled.png';
import viewHighScoresEnabled from './assets/view-high-scores/enabled.png';

const newGameButtonAssets: ButtonAssets = {
  disabled: newGameDisabled,
  enabled: newGameEnabled,
};

const loadGameButtonAssets: ButtonAssets = {
  disabled: loadGameDisabled,
  enabled: loadGameEnabled,
};

const viewHighScoresButtonAssets: ButtonAssets = {
  disabled: viewHighScoresDisabled,
  enabled: viewHighScoresEnabled,
};

const viewCreditsButtonAssets: ButtonAssets = {
  disabled: viewCreditsDisabled,
  enabled: viewCreditsEnabled,
};

const quitButtonAssets: ButtonAssets = {
  disabled: quitDisabled,
  enabled: quitEnabled,
};

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
    <MenuButton assets={newGameButtonAssets} label="New Game" onClick={onNewGameClick} />
    <MenuButton assets={loadGameButtonAssets} label="Load Game" onClick={onLoadGameClick} />
    <MenuButton assets={viewHighScoresButtonAssets} label="View High Scores" onClick={onViewHighScoresClick} />
    <MenuButton assets={viewCreditsButtonAssets} label="View Credits" onClick={onViewCreditsClick} />
    <MenuButton assets={quitButtonAssets} label="Quit" onClick={onQuitClick} />
  </Menu>
);
