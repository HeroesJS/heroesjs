import { Button } from '../Button';
import { Screen } from '../Screen';
import { background, exit } from './assets';

interface HighScoresScreenProps {
  readonly onExitClick?: () => void;
}

export function HighScoresScreen({ onExitClick }: HighScoresScreenProps) {
  return (
    <Screen background={background} label="High Scores">
      <Button assets={exit} label="Exit" onClick={onExitClick} x={603} y={315} />
    </Screen>
  );
}
