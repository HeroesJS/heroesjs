import { Button } from '../Button';
import type { PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { Window } from '../Window';
import { background, cancel, okay } from './assets';

interface NewStandardGameWindowProps extends PositionProps {
  readonly onOkayClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function NewStandardGameWindow({ onCancelClick, onOkayClick, x, y }: NewStandardGameWindowProps) {
  return (
    <Window
      background={background}
      height={NewStandardGameWindow.height}
      label="New Standard Game"
      width={NewStandardGameWindow.width}
      open
      x={x}
      y={y}
    >
      <Text size="large" x={60} y={22}>
        Choose Game Difficulty:
      </Text>
      <Text size="large" x={70} y={132}>
        Customize Opponents:
      </Text>
      <Text size="large" x={26} y={254}>
        Choose Color:
      </Text>
      <Text size="large" x={169} y={254}>
        King of the Hill:
      </Text>
      <Text size="large" x={91} y={338}>
        Choose Scenario:
      </Text>
      <Text size="large" x={95} y={355}>
        Claw ( Easy )
      </Text>
      <Text size="large" x={78} y={388}>
        Difficulty Rating: 60%
      </Text>
      <Button assets={okay} label="Okay" onClick={onOkayClick} x={24} y={412} />
      <Button assets={cancel} label="Cancel" onClick={onCancelClick} x={201} y={412} />
    </Window>
  );
}

NewStandardGameWindow.width = 322 - 2;
NewStandardGameWindow.height = 459;
