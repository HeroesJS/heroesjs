import { MainScreen } from '../MainScreen';
import { NewStandardGameWindow } from '../NewStandardGameWindow';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  return (
    <MainScreen label="New Standard Game">
      <NewStandardGameWindow onCancelClick={onCancelClick} x={310} y={14} />
    </MainScreen>
  );
}
