import { useId, useState } from 'react';
import styled from 'styled-components';

import { MapDifficulty, mapDifficultyLabel, MapSize, mapSizeLabel } from '@heroesjs/hmm1-core';
import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { Button, PositionedComponent, Scrollbar, Text, Window } from '@heroesjs/hmm1-core-ui';

import { background, cancel, inputBackground, okay, scenarioInfoBackground } from './assets';

export interface FileSelectorItem {
  readonly label: string;
  readonly value: string;
}

export interface ScenarioDetail {
  readonly description: string;
  readonly difficulty: MapDifficulty;
  readonly size: MapSize;
}

interface FileSelectorWindowProps extends PositionProps {
  readonly items?: readonly FileSelectorItem[];
  readonly onCancelClick?: () => void;
  readonly onItemSelect?: (value: string) => void;
  readonly onOkayClick?: () => void;
  readonly scenarioDetail?: ScenarioDetail;
  readonly showScenarioDetail?: boolean;
  readonly value?: string;
}

export function FileSelectorWindow({
  items = [],
  onCancelClick,
  onItemSelect,
  onOkayClick,
  scenarioDetail,
  showScenarioDetail,
  value,
  x,
  y,
}: FileSelectorWindowProps) {
  const scenarioInfoShift = -13;
  const scenarioInfoHeight = ScenarioInfo.height + scenarioInfoShift;

  const selectedItem = items.find((item) => item.value === value);

  const [listPosition, setListPosition] = useState(0);

  const listHeight = 10;

  return (
    <Window
      background={background}
      label="File Selector Window"
      height={FileSelectorWindow.height + (showScenarioDetail ? scenarioInfoHeight : 0)}
      open
      width={320}
      x={x}
      y={y}
    >
      <Text align="center" fullWidth size="large" x={0} y={19}>
        File to Load:
      </Text>
      <List aria-label="Items" role="listbox" x={55} y={42}>
        {items.slice(listPosition, listPosition + listHeight).map((item) => (
          <ListItem
            aria-label={item.label}
            aria-selected={item.value === value}
            key={item.value}
            onClick={() => onItemSelect?.(item.value)}
            role="option"
          >
            <Text highlighted={item.value === value} size="large">
              {item.label}
            </Text>
          </ListItem>
        ))}
      </List>
      <Scrollbar
        height={212}
        onDownClick={() => setListPosition(Math.min(items.length - listHeight, listPosition + 1))}
        onUpClick={() => setListPosition(Math.max(listPosition - 1, 0))}
        x={280}
        y={36}
      />
      <Input aria-label="Selected Item" role="textbox" x={48} y={253}>
        <Text align="center" fullWidth size="large" x={0} y={1}>
          {selectedItem?.label}
        </Text>
      </Input>
      {showScenarioDetail && (
        <ScenarioInfo detail={scenarioDetail} x={0} y={FileSelectorWindow.height + scenarioInfoShift} />
      )}
      <Button assets={okay} disabled={!selectedItem} label="Okay" onClick={onOkayClick} x={36} y={280} />
      <Button assets={cancel} label="Cancel" onClick={onCancelClick} x={189} y={280} />
    </Window>
  );
}

FileSelectorWindow.width = 320;
FileSelectorWindow.height = 331;

const List = styled(PositionedComponent)({
  display: 'flex',
  flexDirection: 'column',
  height: 195,
  rowGap: 4,
  textAlign: 'center',
  width: 208,
});

const ListItem = styled('div')({});

const Input = styled(PositionedComponent)({
  backgroundImage: `url(${inputBackground})`,
  height: 19,
  width: 225,
});

interface ScenarioInfoProps extends PositionProps {
  readonly detail?: ScenarioDetail;
}

function ScenarioInfo({ detail, x, y }: ScenarioInfoProps) {
  const sizeLabelId = useId();
  const difficultyLabelId = useId();

  return (
    <ScenarioInfoRoot aria-label="Scenario Detail" role="note" x={x} y={y}>
      <ScenarioLabel hidden id={sizeLabelId} invisible size="large" x={44} y={17}>
        Size:
      </ScenarioLabel>
      <Text align="center" labelId={sizeLabelId} size="large" width={109} x={15} y={35}>
        {detail && mapSizeLabel[detail.size]}
      </Text>
      <ScenarioLabel hidden id={difficultyLabelId} invisible size="large" x={164} y={17}>
        Difficulty:
      </ScenarioLabel>
      <Text align="center" labelId={difficultyLabelId} size="large" width={134} x={160} y={35}>
        {detail && mapDifficultyLabel[detail.difficulty]}
      </Text>
      <ScenarioDescription label="Description:" align="center" size="large" width={245} x={36} y={65}>
        {detail?.description}
      </ScenarioDescription>
    </ScenarioInfoRoot>
  );
}

ScenarioInfo.width = 320;
ScenarioInfo.height = 141;

const ScenarioInfoRoot = styled(PositionedComponent)({
  backgroundImage: `url(${scenarioInfoBackground})`,
  height: ScenarioInfo.height,
  width: ScenarioInfo.width,
});

const ScenarioLabel = styled(Text)({
  letterSpacing: 2,
  textTransform: 'uppercase',
});

const ScenarioDescription = styled(Text)({
  textIndent: 1,
});
