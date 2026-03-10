import { Fragment, useId } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  GameDifficulty,
  getOpponentGameDifficulty,
  isHumanOpponent,
  MapDifficulty,
  MapSize,
  noOpponent,
  OpponentSettings,
  PlayerColor,
} from '@heroesjs/hmm1-core';
import { Button, PlayerColorJewel, Text, Window } from '@heroesjs/hmm1-core-ui';

import { background, okayAssets } from './assets';

interface ScenarioInfo {
  readonly description: string;
  readonly difficulty: MapDifficulty;
  readonly name: string;
  readonly size: MapSize;
}

interface ScenarioInfoWindowProps {
  readonly difficultyRating?: number;
  readonly gameDifficulty?: GameDifficulty;
  readonly humanOpponentsCount?: number;
  readonly kingOfTheHill?: boolean;
  readonly onOkayClick?: () => void;
  readonly open: boolean;
  readonly opponents?: OpponentSettings;
  readonly playerColor?: PlayerColor;
  readonly scenario?: ScenarioInfo;
  readonly x?: number;
  readonly y?: number;
}

export function ScenarioInfoWindow({
  difficultyRating,
  gameDifficulty,
  humanOpponentsCount = 0,
  kingOfTheHill,
  onOkayClick,
  open,
  opponents = [noOpponent, noOpponent, noOpponent],
  playerColor,
  scenario,
  x,
  y,
}: ScenarioInfoWindowProps) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.scenarioInfoWindow' });
  const { t: tCore } = useTranslation('core');

  const scenarioNameLabelId = useId();
  const gameDifficultyLabelId = useId();
  const opponentsLabelId = useId();
  const playerColorLabelId = useId();
  const kingOfTheHillLabelId = useId();
  const dificultyRatingLabelId = useId();
  const scenarioSizeLabelId = useId();
  const scenarioDifficultyLabelId = useId();

  return (
    <Window background={background} height={459} label={t('title')} open={open} width={322} x={x} y={y}>
      <Label hidden id={scenarioNameLabelId} invisible size="large" x={25} y={37}>
        {t('scenario')}
      </Label>
      <Text
        align="right"
        horizontalAnchor="right"
        labelId={scenarioNameLabelId}
        size="large"
        width={155}
        x={295}
        y={38}
      >
        {scenario?.name}
      </Text>
      <Label hidden id={gameDifficultyLabelId} invisible size="large" x={25} y={71}>
        {t('gameDifficulty')}
      </Label>
      <Text
        align="right"
        horizontalAnchor="right"
        labelId={gameDifficultyLabelId}
        size="large"
        width={100}
        x={296}
        y={72}
      >
        {gameDifficulty && tCore(`gameDifficulty.${gameDifficulty}`)}
      </Text>
      <Label hidden id={opponentsLabelId} invisible size="large" x={25} y={105}>
        {t('opponents')}
      </Label>
      <Text align="right" horizontalAnchor="right" labelId={opponentsLabelId} size="large" width={135} x={295} y={106}>
        {opponents.map((opponent, opponentIndex) => (
          <Fragment key={opponentIndex}>
            {!!opponentIndex && <br />}
            <span aria-label={t('opponent', { opponentNumber: opponentIndex + 1 })}>
              {opponent !== noOpponent
                ? isHumanOpponent(opponentIndex, humanOpponentsCount)
                  ? `${tCore('opponentDifficulty.human')}-${tCore(
                      `gameDifficulty.${getOpponentGameDifficulty(opponent)}`
                    )}`
                  : tCore(`opponentDifficulty.computer.${opponent}`)
                : tCore('opponentDifficulty.none')}
            </span>
          </Fragment>
        ))}
      </Text>
      <Label hidden id={playerColorLabelId} invisible size="large" x={25} y={168}>
        {t('playerColor')}
      </Label>
      <PlayerColorJewel labelId={playerColorLabelId} value={playerColor} x={124} y={153} />
      <Label hidden id={kingOfTheHillLabelId} invisible size="large" x={25} y={207}>
        {t('kingOfTheHill.label')}
      </Label>
      <Text
        align="right"
        horizontalAnchor="right"
        labelId={kingOfTheHillLabelId}
        size="large"
        width={100}
        x={295}
        y={208}
      >
        {kingOfTheHill && kingOfTheHill ? t('kingOfTheHill.enabled') : t('kingOfTheHill.disabled')}
      </Text>
      <Label hidden id={dificultyRatingLabelId} invisible size="large" x={25} y={241}>
        {t('difficultyRating.label')}
      </Label>
      <Text
        align="right"
        horizontalAnchor="right"
        labelId={dificultyRatingLabelId}
        size="large"
        width={180}
        x={295}
        y={240}
      >
        {difficultyRating && t('difficultyRating.value', { value: difficultyRating })}
      </Text>
      <Label hidden id={scenarioSizeLabelId} invisible size="large" x={44} y={296}>
        {t('scenarioSize')}
      </Label>
      <Text align="center" labelId={scenarioSizeLabelId} size="large" width={109} x={15} y={315}>
        {scenario && tCore(`mapSize.${scenario.size}`)}
      </Text>
      <Label hidden id={scenarioDifficultyLabelId} invisible size="large" x={164} y={296}>
        {t('scenarioDifficulty')}
      </Label>
      <Text align="center" labelId={scenarioDifficultyLabelId} size="large" width={134} x={160} y={315}>
        {scenario && tCore(`mapDifficulty.${scenario.difficulty}`)}
      </Text>
      <Description align="center" label={t('scenarioDescription')} size="large" width={245} x={36} y={345}>
        {scenario?.description}
      </Description>
      <Button assets={okayAssets} label={t('confirm.label')} onClick={onOkayClick} x={112} y={407} />
    </Window>
  );
}

const Label = styled(Text)({
  letterSpacing: 2,
  textTransform: 'uppercase',
});

const Description = styled(Text)({
  textIndent: 1,
});
