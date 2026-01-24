import { Button, useModal, Window } from '@heroesjs/hmm1-core-ui';

import { background, info, loadGame, newGame, okay, quit, saveGame } from './assets';

interface GameOptionsWindowProps {
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function GameOptionsWindow({
  onInfoClick,
  onLoadGameClick,
  onNewGameClick,
  onOkayClick,
  onQuitClick,
  onSaveGameClick,
  open,
  x,
  y,
}: GameOptionsWindowProps) {
  const [NewGameConfirmationModal, newGameConfirmationModal] = useModal();
  const [LoadGameConfirmationModal, loadGameConfirmationModal] = useModal();

  return (
    <Window background={background} label="Game Options Window" height={459} open={open} width={322} x={x} y={y}>
      <Button assets={newGame} label="New Game" onClick={newGameConfirmationModal.open} x={46} y={31} />
      <NewGameConfirmationModal
        onCancelClick={newGameConfirmationModal.close}
        onConfirmClick={onNewGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to restart?&nbsp;&nbsp;(Your current game will be lost)
      </NewGameConfirmationModal>
      <Button assets={loadGame} label="Load Game" onClick={loadGameConfirmationModal.open} x={179} y={31} />
      <LoadGameConfirmationModal
        onCancelClick={loadGameConfirmationModal.close}
        onConfirmClick={onLoadGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to load a new game?&nbsp;&nbsp;(Your current game will be lost)
      </LoadGameConfirmationModal>
      <Button assets={saveGame} label="Save Game" onClick={onSaveGameClick} x={46} y={107} />
      <Button assets={quit} label="Quit" onClick={onQuitClick} x={179} y={107} />
      <Button assets={okay} label="Okay" onClick={onOkayClick} x={24} y={407} />
      <Button assets={info} label="Info" onClick={onInfoClick} x={201} y={407} />
    </Window>
  );
}
