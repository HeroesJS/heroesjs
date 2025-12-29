import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { gameDifficulties, GameDifficulty, gameDifficultyLabels } from '../core';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Window } from '../Window';
import { background, cancel, inputBackground, kingOfTheHill, okay, selectScenario } from './assets';
import { GameDifficultyOption } from './GameDifficultyOption';

interface NewStandardGameWindowProps extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onSelectScenarioClick?: () => void;
}

export function NewStandardGameWindow({
  onCancelClick,
  onOkayClick,
  onSelectScenarioClick,
  x,
  y,
}: NewStandardGameWindowProps) {
  const [gameDifficulty, setGameDifficulty] = useState(GameDifficulty.Normal);
  const [kingOfTheHillChecked, setKingOfTheHillChecked] = useState(false);

  return (
    <Window background={background} height={459} label="New Standard Game Window" width={322 - 2} x={x} y={y}>
      <Text align="center" size="large" width={319} x={0} y={22}>
        Choose Game Difficulty:
      </Text>
      <GameDifficultyGroup aria-label="Game Difficulty" role="radiogroup" x={19} y={36}>
        {gameDifficulties.map((difficulty, i) => (
          <GameDifficultyOption
            label={gameDifficultyLabels[difficulty]}
            onClick={() => setGameDifficulty(difficulty)}
            selected={difficulty === gameDifficulty}
            value={difficulty}
          />
        ))}
      </GameDifficultyGroup>
      <Text align="center" size="large" width={319} x={0} y={132}>
        Customize Opponents:
      </Text>
      <Text size="large" x={26} y={254}>
        Choose Color:
      </Text>
      <Text size="large" x={169} y={254}>
        King of the Hill:
      </Text>
      <Checkbox
        assets={kingOfTheHill}
        checked={kingOfTheHillChecked}
        label="King of the Hill"
        onChange={setKingOfTheHillChecked}
        x={210}
        y={272}
      />
      <Text align="center" size="large" width={319} x={0} y={338}>
        Choose Scenario:
      </Text>
      <Input value="Claw ( Easy )" x={24} y={354} />
      <Button assets={selectScenario} label="Select Scenario" onClick={onSelectScenarioClick} x={273} y={354} />
      <Text size="large" x={78} y={388}>
        Difficulty Rating: 60%
      </Text>
      <Button assets={okay} label="Okay" onClick={onOkayClick} x={24} y={412} />
      <Button assets={cancel} label="Cancel" onClick={onCancelClick} x={201} y={412} />
    </Window>
  );
}

const GameDifficultyGroup = styled(PositionedComponent)({
  display: 'flex',
  flexDirection: 'row',
});

const Input = styled(TextInput)({
  backgroundImage: `url(${inputBackground})`,
  height: 20,
  paddingRight: 5,
  paddingTop: 2,
  width: 249,
});
