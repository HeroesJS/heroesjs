import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, Menu, MenuItem, Modal, useInfoModal } from '@heroesjs/hmm1-core-ui';

import { cancel, fourPlayers, threePlayers, twoPlayers } from './assets';

interface PlayerCountMenuProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onValueClick?: (value: number) => void;
}

export function PlayerCountMenu({ onCancelClick, onValueClick, x, y }: PlayerCountMenuProps) {
  const twoPlayersInfoModal = useInfoModal();
  const threePlayersInfoModal = useInfoModal();
  const fourPlayersInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

  return (
    <Menu label="Player Count Menu" x={x} y={y}>
      <MenuItem>
        <Button
          assets={twoPlayers}
          label="2 Players"
          onClick={() => onValueClick?.(2)}
          onMouseDown={twoPlayersInfoModal.onMouseDown}
        />
        <Modal open={twoPlayersInfoModal.isOpen} x={177} y={29}>
          Play with 2 human players, and optionally, up to 2 additional computer players.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={threePlayers}
          label="3 Players"
          onClick={() => onValueClick?.(3)}
          onMouseDown={threePlayersInfoModal.onMouseDown}
        />
        <Modal open={threePlayersInfoModal.isOpen} x={177} y={29}>
          Play with 3 human players, and optionally 1 computer player.
        </Modal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={fourPlayers}
          label="4 Players"
          onClick={() => onValueClick?.(4)}
          onMouseDown={fourPlayersInfoModal.onMouseDown}
        />
        <Modal open={fourPlayersInfoModal.isOpen} x={177} y={29}>
          Play with 4 human players.
        </Modal>
      </MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
          Cancel back to the main menu.
        </Modal>
      </MenuItem>
    </Menu>
  );
}
