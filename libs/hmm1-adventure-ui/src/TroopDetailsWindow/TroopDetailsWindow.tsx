import {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Button, Modal, PositionedComponent, type PositionProps, Text, useModal, Window} from '@heroesjs/hmm1-base-ui';
import {type CreatureData, formatDamageRange, formatSkillValue, Luck, Morale, type Skill} from '@heroesjs/hmm1-core';

import {CreatureIcon} from '../CreatureIcon';

import * as assets from './assets';

export type CreatureInfo = Pick<
  CreatureData,
  'hitPoints' | 'id' | 'maxDamage' | 'minDamage' | 'shots' | 'skills' | 'speed'
>;

interface Props extends PositionProps {
  readonly allowDismiss?: boolean;
  readonly count?: number;
  readonly creature: CreatureInfo;
  readonly hideExit?: boolean;
  readonly luck?: Luck;
  readonly morale?: Morale;
  readonly onDismissClick?: () => void;
  readonly onExitClick?: () => void;
  readonly skillsBonus?: Partial<Readonly<Record<Skill, number>>>;
}

export const TroopDetailsWindow = ({
  allowDismiss,
  count = 0,
  creature,
  hideExit,
  luck = Luck.Normal,
  morale = Morale.Normal,
  onDismissClick,
  onExitClick,
  skillsBonus = {},
  x,
  y,
}: Props) => {
  const {t} = useTranslation(['adventure', 'core'], {keyPrefix: 'component.troopDetailsWindow'});

  const confirmDismissModal = useModal();

  return (
    <Window background={assets.background} height={229} label={t('title')} width={402} x={x} y={y}>
      <CreatureRoot x={35} y={20}>
        <CreatureIcon creature={creature.id} size="large" />
      </CreatureRoot>
      <CountRoot x={41} y={174}>
        <Text align="center" size="large" width={140} x={2} y={11}>
          {count}
        </Text>
      </CountRoot>
      <Text align="center" size="large" width={160} x={203} y={26}>
        {t(`core:creatures.${creature.id}`)}
      </Text>
      <Text align="center" size="large" width={159} x={203} y={46}>
        {(Object.keys(creature.skills) as readonly Skill[]).map((skill) => (
          <Fragment key={skill}>
            {t(`core:skill.${skill}`)}: {formatSkillValue(creature.skills, skill, skillsBonus)}
            <br />
          </Fragment>
        ))}
        {!!creature.shots && (
          <>
            {t('shotsLabel')}: {creature.shots}
            <br />
          </>
        )}
        {t('damageLabel')}: {formatDamageRange(creature.minDamage, creature.maxDamage)}
        <br />
        {t('hitPointsLabel')}: {creature.hitPoints}
        <br />
        {t('speedLabel')}: {t(`core:creatureSpeed.${creature.speed}`)}
        <br />
        {t('moraleLabel')}: {t(`core:morale.${morale}`)}
        <br />
        {t('luckLabel')}: {t(`core:luck.${luck}`)}
      </Text>
      {allowDismiss && (
        <Button
          assets={assets.dismissButton}
          label={t('dismissLabel')}
          onClick={confirmDismissModal.open}
          x={200}
          y={181}
        />
      )}
      <Modal
        onCancelClick={confirmDismissModal.close}
        onConfirmClick={onDismissClick}
        open={confirmDismissModal.isOpen}
        size={1}
        type="yesNo"
        x={177}
        y={29}
      >
        {t('dismissConfirm')}
      </Modal>
      {!hideExit && <Button assets={assets.exitButton} label={t('exitLabel')} onClick={onExitClick} x={295} y={181} />}
    </Window>
  );
};

const CreatureRoot = styled(PositionedComponent)({
  alignItems: 'end',
  display: 'flex',
  height: 145,
  justifyContent: 'center',
  width: 155,
});

const CountRoot = styled(PositionedComponent)({
  background: `url(${assets.countBackground})`,
  height: 38,
  width: 142,
});
