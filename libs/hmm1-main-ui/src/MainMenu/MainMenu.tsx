import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { loadGame, newGame, quit, viewCredits, viewHighScores } from './assets';

interface MainMenuProps {
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
  readonly x?: number;
  readonly y?: number;
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
  const [NewGameInfoModal, newGameInfoModal] = useModal();
  const [LoadGameInfoModal, loadGameInfoModal] = useModal();
  const [ViewHighScoresInfoModal, viewHighScoresInfoModal] = useModal();
  const [ViewCreditsInfoModal, viewCreditsInfoModal] = useModal();
  const [QuitInfoModal, quitInfoModal] = useModal();

  return (
    <Menu label="Main Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={newGame} label="New Game" onClick={onNewGameClick} onMouseDown={newGameInfoModal.onMouseDown} />
        <NewGameInfoModal>Start a single or multi‑player game.</NewGameInfoModal>
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
