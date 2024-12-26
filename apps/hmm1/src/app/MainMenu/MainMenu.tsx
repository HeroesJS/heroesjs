import { Button } from '../Button';
import { Menu } from '../Menu';
import newGame from './assets/new-game.png';
import newGameDisabled from './assets/new-game-disabled.png';
import loadGame from './assets/load-game.png';
import loadGameDisabled from './assets/load-game-disabled.png';
import quit from './assets/quit.png';
import quitDisabled from './assets/quit-disabled.png';
import viewCredits from './assets/view-credits.png';
import viewCreditsDisabled from './assets/view-credits-disabled.png';
import viewHighScores from './assets/view-high-scores.png';
import viewHighScoresDisabled from './assets/view-high-scores-disabled.png';
import type { PositionProps } from '../core';

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
    <Button
      assets={{
        disabled: newGameDisabled,
        enabled: newGame,
      }}
      label="New Game"
      onClick={onNewGameClick}
    />
    <Button
      assets={{
        disabled: loadGameDisabled,
        enabled: loadGame,
      }}
      label="Load Game"
      onClick={onLoadGameClick}
    />
    <Button
      assets={{
        disabled: viewHighScoresDisabled,
        enabled: viewHighScores,
      }}
      label="View High Scores"
      onClick={onViewHighScoresClick}
    />
    <Button
      assets={{
        disabled: viewCreditsDisabled,
        enabled: viewCredits,
      }}
      label="View Credits"
      onClick={onViewCreditsClick}
    />
    <Button
      assets={{
        disabled: quitDisabled,
        enabled: quit,
      }}
      label="Quit"
      onClick={onQuitClick}
    />
  </Menu>
);
