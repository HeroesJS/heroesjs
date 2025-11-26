import { Button } from '../Button';
import { Menu } from '../Menu';
import type { PositionProps } from '../PositionedComponent';

import { loadGame, newGame, quit, viewCredits, viewHighScores } from './assets';

interface MainMenuProps extends PositionProps {
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
}

export function MainMenu({
  onLoadGameClick,
  onNewGameClick,
  onQuitClick,
  onViewCreditsClick,
  onViewHighScoresClick,
  x,
  y,
}: MainMenuProps) {
  return (
    <Menu label="Main Menu" x={x} y={y}>
      <Button assets={newGame} label="New Game" onClick={onNewGameClick} />
      <Button assets={loadGame} label="Load Game" onClick={onLoadGameClick} />
      <Button assets={viewHighScores} label="View High Scores" onClick={onViewHighScoresClick} />
      <Button assets={viewCredits} label="View Credits" onClick={onViewCreditsClick} />
      <Button assets={quit} label="Quit" onClick={onQuitClick} />
    </Menu>
  );
}
