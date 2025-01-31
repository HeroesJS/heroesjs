import { useTranslation } from 'react-i18next';

import { Button, type PositionProps, Text, Window } from '@heroesjs/hmm1-base-ui';
import {
  calculateRating,
  formatRating,
  type GameDifficulty,
  OpponentDifficulty,
  PlayerColor,
  ScenarioDifficulty,
  ScenarioSize,
} from '@heroesjs/hmm1-core';

import { PlayerColorJewel } from '../PlayerColorJewel';

import { background, okay } from './assets';

interface ScenarioInfo {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly name: string;
  readonly size: ScenarioSize;
}

interface Props extends PositionProps {
  readonly gameDifficulty?: GameDifficulty;
  readonly kingOfTheHill?: boolean;
  readonly onConfirmClick?: () => void;
  readonly opponentSettings?: OpponentDifficulty[];
  readonly playerColor?: PlayerColor;
  readonly scenario?: ScenarioInfo;
}

export const StandardScenarioInfoWindow = ({
  gameDifficulty,
  kingOfTheHill,
  onConfirmClick,
  opponentSettings,
  playerColor,
  scenario,
  x,
  y,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.standardScenarioInfoWindow' });

  const rating = calculateRating({
    kingOfTheHill: kingOfTheHill ?? false,
    opponentSettings: opponentSettings ?? new Array(3).fill(OpponentDifficulty.Average),
    scenarioDifficulty: scenario?.difficulty ?? ScenarioDifficulty.Normal,
    scenarioSize: scenario?.size ?? ScenarioSize.Medium,
  });

  return (
    <Window background={background} height={459} label={t('title')} width={322} x={x} y={y}>
      <Text align="right" size="large" width={150} x={145} y={38}>
        {scenario?.name}
      </Text>
      <Text align="right" size="large" width={115} x={181} y={72}>
        {gameDifficulty && t(`core:gameDifficulty.${gameDifficulty}`)}
      </Text>
      <Text align="right" size="large" width={115} x={180} y={106}>
        {opponentSettings &&
          opponentSettings?.map((difficulty) => t(`core:opponentDifficulty.${difficulty}`)).join('\n')}
      </Text>
      <PlayerColorJewel value={playerColor ?? PlayerColor.Blue} x={124} y={153} />
      <Text align="right" size="large" width={115} x={180} y={208}>
        {kingOfTheHill !== undefined && t(`core:yesNo.${kingOfTheHill}`)}
      </Text>
      <Text align="right" size="large" width={115} x={180} y={240}>
        {formatRating(rating)}
      </Text>
      <Text align="center" label={t('scenarioSize')} size="large" width={90} x={25} y={315}>
        {scenario?.size && t(`core:scenarioSize.${scenario.size}`)}
      </Text>
      <Text align="center" label={t('scenarioDifficulty')} size="large" width={90} x={182} y={315}>
        {scenario?.difficulty && t(`core:scenarioDifficulty.${scenario.difficulty}`)}
      </Text>
      <Text align="center" label={t('scenarioDescription')} size="large" width={245} x={36} y={345}>
        {scenario?.description}
      </Text>
      <Button assets={okay} label={t('confirmLabel')} onClick={onConfirmClick} x={112} y={407} />
    </Window>
  );
};
