import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, useInfoModal } from '@heroesjs/hmm1-core-ui';

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
  const { Modal: NewGameInfoModal, ...newGameInfoModal } = useInfoModal();
  const { Modal: LoadGameInfoModal, ...loadGameInfoModal } = useInfoModal();
  const { Modal: ViewHighScoresInfoModal, ...viewHighScoresInfoModal } = useInfoModal();
  const { Modal: ViewCreditsInfoModal, ...viewCreditsInfoModal } = useInfoModal();
  const { Modal: QuitInfoModal, ...quitInfoModal } = useInfoModal();

  return (
    <Menu label="Main Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={newGame} label="New Game" onClick={onNewGameClick} onMouseDown={newGameInfoModal.onMouseDown} />
        <NewGameInfoModal>Start a single or multi-player game.</NewGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={loadGame}
          label="Load Game"
          onClick={onLoadGameClick}
          onMouseDown={loadGameInfoModal.onMouseDown}
        />
        <LoadGameInfoModal>Load a previously saved game.</LoadGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewHighScores}
          label="View High Scores"
          onClick={onViewHighScoresClick}
          onMouseDown={viewHighScoresInfoModal.onMouseDown}
        />
        <ViewHighScoresInfoModal>View the high score screen.</ViewHighScoresInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewCredits}
          label="View Credits"
          onClick={onViewCreditsClick}
          onMouseDown={viewCreditsInfoModal.onMouseDown}
        />
        <ViewCreditsInfoModal>View the credits screen.</ViewCreditsInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={quit} label="Quit" onClick={onQuitClick} onMouseDown={quitInfoModal.onMouseDown} />
        <QuitInfoModal>Quit Heroes of Might and Magic and return to the DOS prompt.</QuitInfoModal>
      </MenuItem>
    </Menu>
  );
}
