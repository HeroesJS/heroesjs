import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { cancel, fourPlayers, threePlayers, twoPlayers } from './assets';

interface PlayerCountMenuProps {
  readonly onCancelClick?: () => void;
  readonly onValueClick?: (value: number) => void;
  readonly x?: number;
  readonly y?: number;
}

export function PlayerCountMenu({ onCancelClick, onValueClick, x, y }: PlayerCountMenuProps) {
  const [TwoPlayersInfoModal, twoPlayersInfoModal] = useModal();
  const [ThreePlayersInfoModal, threePlayersInfoModal] = useModal();
  const [FourPlayersInfoModal, fourPlayersInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  return (
    <Menu label="Player Count Menu" x={x} y={y}>
      <MenuItem>
        <Button
          assets={twoPlayers}
          label="2 Players"
          onClick={() => onValueClick?.(2)}
          onMouseDown={twoPlayersInfoModal.onMouseDown}
        />
        <TwoPlayersInfoModal>
          Play with 2 human players, and optionally, up to 2 additional computer players.
        </TwoPlayersInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={threePlayers}
          label="3 Players"
          onClick={() => onValueClick?.(3)}
          onMouseDown={threePlayersInfoModal.onMouseDown}
        />
        <ThreePlayersInfoModal>Play with 3 human players, and optionally 1 computer player.</ThreePlayersInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={fourPlayers}
          label="4 Players"
          onClick={() => onValueClick?.(4)}
          onMouseDown={fourPlayersInfoModal.onMouseDown}
        />
        <FourPlayersInfoModal>Play with 4 human players.</FourPlayersInfoModal>
      </MenuItem>
      <MenuItem />
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} onMouseDown={cancelInfoModal.onMouseDown} />
        <CancelInfoModal>Cancel back to the main menu.</CancelInfoModal>
      </MenuItem>
    </Menu>
  );
}
