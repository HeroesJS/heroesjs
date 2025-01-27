import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import {
  calculateRating,
  formatRating,
  type GameDifficulty,
  OpponentDifficulty,
  PlayerColor,
  ScenarioDifficulty,
  ScenarioSize,
} from '@heroesjs/hmm1-core';

import { PlayerColorGem } from '../PlayerColorGem';

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
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'standardScenarioInfoWindow' });

  const rating = calculateRating({
    kingOfTheHill: kingOfTheHill ?? false,
    opponentSettings: opponentSettings ?? new Array(3).fill(OpponentDifficulty.Average),
    scenarioDifficulty: scenario?.difficulty ?? ScenarioDifficulty.Normal,
    scenarioSize: scenario?.size ?? ScenarioSize.Medium,
  });

  return (
    <Root aria-label={t('title')} role="dialog" x={x} y={y}>
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
      <PlayerColorGem value={playerColor ?? PlayerColor.Blue} x={124} y={153} />
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
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  height: 459,
  width: 322,
});
