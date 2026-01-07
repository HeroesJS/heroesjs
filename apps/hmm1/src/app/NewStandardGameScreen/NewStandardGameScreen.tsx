import { MainScreen } from '../MainScreen';
import { NewStandardGameWindow } from '../NewStandardGameWindow';

export function NewStandardGameScreen() {
  return (
    <MainScreen label="New Standard Game">
      <NewStandardGameWindow x={310} y={14} />
    </MainScreen>
  );
}
