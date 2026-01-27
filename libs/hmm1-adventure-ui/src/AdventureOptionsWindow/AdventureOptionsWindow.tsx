import { Button, useModal, Window } from '@heroesjs/hmm1-core-ui';

import { background, viewPuzzleAssets, viewWorldAssets } from './assets';

interface AdventureOptionsWindowProps {
  readonly onViewPuzzleClick?: () => void;
  readonly onViewWorldClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function AdventureOptionsWindow({
  onViewPuzzleClick,
  onViewWorldClick,
  open,
  x,
  y,
}: AdventureOptionsWindowProps) {
  const [ViewWorldInfoModal, viewWorldInfoModal] = useModal();
  const [ViewPuzzleInfoModal, viewPuzzleInfoModal] = useModal();

  return (
    <Window background={background} height={236} label="Adventure Options Window" open={open} width={322} x={x} y={y}>
      <Button
        assets={viewWorldAssets}
        label="View World"
        onClick={onViewWorldClick}
        onMouseDown={viewWorldInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <ViewWorldInfoModal>View the entire world.</ViewWorldInfoModal>
      <Button
        assets={viewPuzzleAssets}
        label="View Puzzle"
        onClick={onViewPuzzleClick}
        onMouseDown={viewPuzzleInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <ViewPuzzleInfoModal>View the obelisk puzzle.</ViewPuzzleInfoModal>
    </Window>
  );
}
