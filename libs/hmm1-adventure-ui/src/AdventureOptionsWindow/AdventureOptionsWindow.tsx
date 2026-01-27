import { Button, useModal, Window } from '@heroesjs/hmm1-core-ui';

import { background, viewWorldAssets } from './assets';

interface AdventureOptionsWindowProps {
  readonly onViewWorldClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function AdventureOptionsWindow({ onViewWorldClick, open, x, y }: AdventureOptionsWindowProps) {
  const [ViewWorldInfoModal, viewWorldInfoModal] = useModal();

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
    </Window>
  );
}
