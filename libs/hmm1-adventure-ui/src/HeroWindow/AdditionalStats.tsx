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
  const { t } = useTranslation('adventure', { keyPrefix: 'component.heroWindow' });

  const moraleInfoModal = useModal();
  const moraleModal = useModal();

  const luckInfoModal = useModal();
  const luckModal = useModal();

  const experienceInfoModal = useModal();
  const experienceModal = useModal();

  return (
    <Root x={x} y={y}>
      <MoraleRoot
        {...moraleInfoModal.handlers}
        onClick={moraleModal.open}
        onMouseLeave={onMoraleMouseLeave}
        onMouseOver={onMoraleMouseOver}
        y={0}
      >
        <PositionedComponent as="img" src={assets.morale.good} x={1} y={2} />
      </MoraleRoot>
      <Modal open={moraleInfoModal.isOpen} size={3} x={177} y={29}>
        {t(`moraleDescription.${morale}`)}
        {t('noModifiers')}
      </Modal>
      <Modal onConfirmClick={moraleModal.close} open={moraleModal.isOpen} size={3} type="okay" x={177} y={29}>
        {t(`moraleDescription.${morale}`)}
        {t('noModifiers')}
      </Modal>
      <LuckRoot
        {...luckInfoModal.handlers}
        onClick={luckModal.open}
        onMouseLeave={onLuckMouseLeave}
        onMouseOver={onLuckMouseOver}
        y={32}
      >
        <PositionedComponent as="img" src={assets.luck.neutral} x={1} />
      </LuckRoot>
      <Modal open={luckInfoModal.isOpen} size={3} x={177} y={29}>
        {t(`luckDescription.${luck}`)}
        {t('noModifiers')}
      </Modal>
      <Modal onConfirmClick={luckModal.close} open={luckModal.isOpen} size={3} type="okay" x={177} y={29}>
        {t(`luckDescription.${luck}`)}
        {t('noModifiers')}
      </Modal>
      <ExperienceRoot
        {...experienceInfoModal.handlers}
        onClick={experienceModal.open}
        onMouseLeave={onExperienceMouseLeave}
        onMouseOver={onExperienceMouseOver}
        y={60}
      >
        <PositionedComponent as="img" src={assets.experience.small} x={1} y={0} />
        <Text align="right" size="small" width={AdditionalStats.width - 17} y={10}>
          {experience}
        </Text>
      </ExperienceRoot>
      <Modal open={experienceInfoModal.isOpen} size={1} x={177} y={29}>
        {t('experienceDescription', {
          experience,
          level,
          nextLevelExperience,
        })}
      </Modal>
      <Modal onConfirmClick={experienceModal.close} open={experienceModal.isOpen} size={1} type="okay" x={177} y={29}>
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
