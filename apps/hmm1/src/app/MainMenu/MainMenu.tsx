import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, Modal, useInfoModal } from '@heroesjs/hmm1-core-ui';

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
  const newGameInfoModal = useInfoModal();
  const loadGameInfoModal = useInfoModal();
  const viewHighScoresInfoModal = useInfoModal();
  const viewCreditsInfoModal = useInfoModal();
  const quitInfoModal = useInfoModal();

  return (
    <Menu label="Main Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={newGame} label="New Game" onClick={onNewGameClick} onMouseDown={newGameInfoModal.onMouseDown} />
        <Modal open={newGameInfoModal.isOpen} x={177} y={29}>
          Start a single or multi-player game.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={loadGame}
          label="Load Game"
          onClick={onLoadGameClick}
          onMouseDown={loadGameInfoModal.onMouseDown}
        />
        <Modal open={loadGameInfoModal.isOpen} x={177} y={29}>
          Load a previously saved game.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewHighScores}
          label="View High Scores"
          onClick={onViewHighScoresClick}
          onMouseDown={viewHighScoresInfoModal.onMouseDown}
        />
        <Modal open={viewHighScoresInfoModal.isOpen} x={177} y={29}>
          View the high score screen.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewCredits}
          label="View Credits"
          onClick={onViewCreditsClick}
          onMouseDown={viewCreditsInfoModal.onMouseDown}
        />
        <Modal open={viewCreditsInfoModal.isOpen} x={177} y={29}>
          View the credits screen.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button assets={quit} label="Quit" onClick={onQuitClick} onMouseDown={quitInfoModal.onMouseDown} />
        <Modal open={quitInfoModal.isOpen} x={177} y={29}>
          Quit Heroes of Might and Magic and return to the DOS prompt.
        </Modal>
      </MenuItem>
    </Menu>
  );
}
