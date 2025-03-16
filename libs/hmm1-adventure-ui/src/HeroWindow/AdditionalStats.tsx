import { range } from 'lodash';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Modal, PositionedComponent, type PositionProps, Text, useModal } from '@heroesjs/hmm1-base-ui';
import type { Luck, Morale } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly experience: number;
  readonly level: number;
  readonly luck: Luck;
  readonly morale: Morale;
  readonly nextLevelExperience: number;
  readonly onExperienceMouseLeave?: () => void;
  readonly onExperienceMouseOver?: () => void;
  readonly onLuckMouseLeave?: () => void;
  readonly onLuckMouseOver?: () => void;
  readonly onMoraleMouseLeave?: () => void;
  readonly onMoraleMouseOver?: () => void;
}

export const AdditionalStats = ({
  experience,
  level,
  luck,
  morale,
  nextLevelExperience,
  onExperienceMouseLeave,
  onExperienceMouseOver,
  onLuckMouseLeave,
  onLuckMouseOver,
  onMoraleMouseLeave,
  onMoraleMouseOver,
  x,
  y,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.heroWindow' });

  const moraleDetailsModal = useModal();
  const luckDetailsModal = useModal();
  const experienceDetailsModal = useModal();

  return (
    <Root x={x} y={y}>
      <MoraleRoot
        onClick={moraleDetailsModal.onClick}
        onMouseDown={moraleDetailsModal.onMouseDown}
        onMouseLeave={onMoraleMouseLeave}
        onMouseOver={onMoraleMouseOver}
        y={2}
      >
        {morale ? (
          range(0, Math.abs(morale)).map((v) => (
            <PositionedComponent
              as="img"
              key={v}
              src={morale > 0 ? assets.morale.good : assets.morale.bad}
              x={1 + v * 27}
            />
          ))
        ) : (
          <PositionedComponent as="img" src={assets.morale.neutral} x={1} />
        )}
      </MoraleRoot>
      <Modal
        onConfirmClick={moraleDetailsModal.close}
        open={moraleDetailsModal.isOpen}
        size={3}
        type={moraleDetailsModal.clickOpened ? 'okay' : undefined}
        x={177}
        y={29}
      >
        {t(`morale.${getEffectType(morale)}.description`)}
        {t('core:notImplemented')}
      </Modal>
      <LuckRoot
        onClick={luckDetailsModal.onClick}
        onMouseDown={luckDetailsModal.onMouseDown}
        onMouseLeave={onLuckMouseLeave}
        onMouseOver={onLuckMouseOver}
        y={34}
      >
        {luck ? (
          range(0, Math.abs(luck)).map((v) => (
            <PositionedComponent
              as="img"
              key={v}
              src={luck > 0 ? assets.luck.good : assets.luck.bad}
              x={1 + v * 27}
              y={2}
            />
          ))
        ) : (
          <PositionedComponent as="img" src={assets.luck.neutral} x={1} />
        )}
      </LuckRoot>
      <Modal
        onConfirmClick={luckDetailsModal.close}
        open={luckDetailsModal.isOpen}
        size={3}
        type={luckDetailsModal.clickOpened ? 'okay' : undefined}
        x={177}
        y={29}
      >
        {t(`luck.${getEffectType(luck)}.description`)}
        {t('core:notImplemented')}
      </Modal>
      <ExperienceRoot
        onClick={experienceDetailsModal.onClick}
        onMouseDown={experienceDetailsModal.onMouseDown}
        onMouseLeave={onExperienceMouseLeave}
        onMouseOver={onExperienceMouseOver}
        y={60}
      >
        <PositionedComponent as="img" src={assets.experience.small} x={1} y={0} />
        <Text align="right" size="small" width={AdditionalStats.width - 17} y={10}>
          {experience}
        </Text>
      </ExperienceRoot>
      <Modal
        onConfirmClick={experienceDetailsModal.close}
        open={experienceDetailsModal.isOpen}
        size={1}
        type={experienceDetailsModal.clickOpened ? 'okay' : undefined}
        x={177}
        y={29}
      >
        {t('experienceDescription', {
          experience,
          level,
          nextLevelExperience,
        })}
      </Modal>
    </Root>
  );
};

AdditionalStats.width = 82;
AdditionalStats.height = 93;

export const getEffectType = (value: Morale | Luck) => (value ? (value > 0 ? 'good' : 'bad') : 'neutral');

const Root = styled(PositionedComponent)({
  background: `url(${assets.additionalStatsBackground})`,
  height: AdditionalStats.height,
  width: AdditionalStats.width,
});

const MoraleRoot = styled(PositionedComponent)({
  height: 28,
  width: AdditionalStats.width,
});

const LuckRoot = styled(PositionedComponent)({
  height: 28,
  width: AdditionalStats.width,
});

const ExperienceRoot = styled(PositionedComponent)({
  height: 32,
  width: AdditionalStats.width,
});
