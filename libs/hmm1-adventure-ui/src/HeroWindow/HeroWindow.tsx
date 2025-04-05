import { compact, range } from 'lodash';
import { type MouseEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text, useModal, Window } from '@heroesjs/hmm1-base-ui';
import {
  armySize,
  artifactById,
  ArtifactId,
  creatureDataById,
  type Hero,
  type PlayerColor,
  ScreenHeight,
  ScreenWidth,
  type Skill,
  skills,
} from '@heroesjs/hmm1-core';

import { ArtifactSlot } from '../ArtifactSlot';
import { Crest } from '../Crest';
import { HeroPortrait } from '../HeroPortrait';
import { TroopDetailsWindow } from '../TroopDetailsWindow';
import { TroopSlot } from '../TroopSlot';

import { AdditionalStats, getEffectType } from './AdditionalStats';
import * as assets from './assets';
import { SkillInfo } from './SkillInfo';

export interface HeroInfo
  extends Pick<
    Hero,
    'army' | 'artifacts' | 'experience' | 'heroClass' | 'id' | 'level' | 'luck' | 'morale' | 'skills'
  > {
  readonly ownerColor: PlayerColor;
}

interface Props {
  readonly allowDismiss?: boolean;
  readonly hero: HeroInfo;
  readonly onDismissClick?: () => void;
  readonly onDismissTroop?: (index: number) => void;
  readonly onExitClick?: () => void;
  readonly onKingdomOverviewClick?: () => void;
  readonly onMoveTroop?: (index: number, targetIndex: number) => void;
}

export const HeroWindow = ({
  allowDismiss,
  hero,
  onDismissClick,
  onDismissTroop,
  onExitClick,
  onKingdomOverviewClick,
  onMoveTroop,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.heroWindow' });

  const notImplementedModal = useModal();

  const heroTitle = t('heroTitle', {
    heroClass: t(`core:heroClasses.${hero.heroClass}`),
    name: t(`core:heroes.${hero.id}`),
  });

  const [selectedTroopIndex, setSelectedTroopIndex] = useState<number>();

  const [statusText, setStatusText] = useState(t('defaultStatusText'));

  const setDefaultStatusText = useCallback(() => setStatusText(t('defaultStatusText')), [t]);

  const handleSkillMouseOver = useCallback(
    (value: Skill) => setStatusText(t('viewSkillInfoStatusText', { name: t(`core:skill.${value}`) })),
    [t],
  );

  const handleMoraleMouseOver = useCallback(
    () => setStatusText(t('moraleStatusText', { name: t(`morale.${getEffectType(hero.morale)}.title`) })),
    [hero.morale, t],
  );

  const handleLuckMouseOver = useCallback(
    () => setStatusText(t('luckStatusText', { name: t(`luck.${getEffectType(hero.luck)}.title`) })),
    [hero.luck, t],
  );

  const handleExperienceMouseOver = useCallback(() => setStatusText(t('experienceStatusText')), [t]);

  const handleCrestMouseOver = useCallback(() => setStatusText(t('kingdomOverviewStatusText')), [t]);

  const handleTroopMouseOver = useCallback(
    (index: number) => {
      const troop = hero.army[index];
      const selectedTroop = selectedTroopIndex !== undefined ? hero.army[selectedTroopIndex] : undefined;

      if (selectedTroop) {
        setStatusText(
          troop !== selectedTroop
            ? troop
              ? t('exchangeTroop', {
                  name: t(`core:creatures.${selectedTroop.creatureId}`),
                  otherName: t(`core:creatures.${troop.creatureId}`),
                })
              : t('moveTroop', { name: t(`core:creatures.${selectedTroop.creatureId}`) })
            : t('selectTroop', { name: t(`core:creatures.${troop.creatureId}`) }),
        );
      } else {
        setStatusText(troop ? t('selectTroop', { name: t(`core:creatures.${troop.creatureId}`) }) : t('noTroop'));
      }
    },
    [hero.army, selectedTroopIndex, t],
  );

  const [troopInfoIndex, setTroopInfoIndex] = useState<number>();

  const infoTroop = troopInfoIndex !== undefined ? hero.army[troopInfoIndex] : undefined;

  const troopInfoModal = useModal(undefined, {
    onAfterClose: () => setTroopInfoIndex(undefined),
    onBeforeOpen: (_e, index: number) => setTroopInfoIndex(index),
  });

  const troopDetailsModal = useModal(undefined, {
    onAfterClose: () => setSelectedTroopIndex(undefined),
  });

  const handleTroopClick = useCallback(
    (index: number) => {
      if (selectedTroopIndex === undefined) {
        if (!hero.army[index]) {
          return;
        } else {
          setSelectedTroopIndex(index);

          return;
        }
      }

      if (index === selectedTroopIndex) {
        troopDetailsModal.open();
      } else {
        onMoveTroop?.(selectedTroopIndex, index);

        setSelectedTroopIndex(undefined);
      }
    },
    [hero.army, onMoveTroop, selectedTroopIndex, troopDetailsModal],
  );

  const handleDismissTroopClick = useCallback(() => {
    troopDetailsModal.close();

    onDismissTroop?.(selectedTroopIndex!);
  }, [onDismissTroop, selectedTroopIndex, troopDetailsModal]);

  const [selectedArtifactIndex, setSelectedArtifactIndex] = useState<number>();

  const artifactDetailsModal = useModal(undefined, {
    onAfterClose: () => setSelectedArtifactIndex(undefined),
    onBeforeOpen: (_e, index: number) => setSelectedArtifactIndex(index),
  });

  const handleArtifactMouseOver = useCallback(
    (_e: MouseEvent, index: number) => {
      const artifact = hero.artifacts[index];

      if (artifact === ArtifactId.Spellbook) {
        setStatusText(t('spellbookStatusText'));

        return;
      }

      setStatusText(
        t('artifactStatusText', {
          name: t(`core:artifacts.${hero.artifacts[index]}.name`),
        }),
      );
    },
    [hero.artifacts, t],
  );

  const handleArtifactClick = useCallback(
    (e: MouseEvent, index: number) => {
      const artifact = hero.artifacts[index];

      if (artifact === ArtifactId.Spellbook) {
        notImplementedModal.open();

        return;
      }

      artifactDetailsModal.onClick(e, index);
    },
    [artifactDetailsModal, hero.artifacts, notImplementedModal],
  );

  const dismissConfirmModal = useModal();

  const handleDismissMouseOver = useCallback(
    () => setStatusText(t('dismissStatusText', { name: heroTitle })),
    [heroTitle, t],
  );

  const handleConfirmDismissClick = useCallback(() => {
    onDismissClick?.();

    dismissConfirmModal.close();
  }, [dismissConfirmModal, onDismissClick]);

  const handleExitMouseOver = useCallback(() => setStatusText(t('exitStatusText')), [t]);

  const selectedTroop = selectedTroopIndex !== undefined ? hero.army[selectedTroopIndex] : undefined;

  return (
    <Window background={assets.background} height={HeroWindow.height} label={t('title')} width={HeroWindow.width}>
      <Text align="center" heading size="large" width={HeroWindow.width} y={72}>
        {heroTitle}
      </Text>
      <HeroPortrait heroId={hero.id} x={49} y={101} />
      {skills.map((skill, i) => (
        <SkillInfo
          key={skill}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleSkillMouseOver}
          skill={skill}
          value={hero.skills[skill]}
          x={156 + i * (SkillInfo.width + 6)}
          y={101}
        />
      ))}
      <AdditionalStats
        experience={hero.experience}
        level={hero.level}
        luck={hero.luck}
        morale={hero.morale}
        nextLevelExperience={1_000}
        onExperienceMouseLeave={setDefaultStatusText}
        onExperienceMouseOver={handleExperienceMouseOver}
        onLuckMouseLeave={setDefaultStatusText}
        onLuckMouseOver={handleLuckMouseOver}
        onMoraleMouseLeave={setDefaultStatusText}
        onMoraleMouseOver={handleMoraleMouseOver}
        x={508}
        y={101}
      />
      <Crest
        color={hero.ownerColor}
        heroClass={hero.heroClass}
        label={t('kingdomOverviewLabel')}
        onClick={onKingdomOverviewClick}
        onMouseLeave={setDefaultStatusText}
        onMouseOver={handleCrestMouseOver}
        x={49}
        y={200}
      />
      {range(0, armySize)
        .map((index) => hero.army[index])
        .map((troop, i) => (
          <TroopSlot
            {...troop}
            index={i}
            key={i}
            onClick={handleTroopClick}
            onMouseDown={troopInfoModal.onMouseDown}
            onMouseLeave={setDefaultStatusText}
            onMouseOver={handleTroopMouseOver}
            selected={selectedTroopIndex === i}
            x={156 + i * (TroopSlot.width + 6)}
            y={200}
          />
        ))}
      {infoTroop && troopInfoModal.isOpen && (
        <TroopDetailsWindow
          count={infoTroop.count}
          creature={creatureDataById[infoTroop.creatureId]}
          hideExit
          skillsBonus={hero.skills}
          x={119}
          y={50}
        />
      )}
      {selectedTroop && troopDetailsModal.isOpen && (
        <TroopDetailsWindow
          allowDismiss={compact(hero.army).length > 1}
          count={selectedTroop.count}
          creature={creatureDataById[selectedTroop.creatureId]}
          onDismissClick={handleDismissTroopClick}
          onExitClick={troopDetailsModal.close}
          skillsBonus={hero.skills}
          x={119}
          y={50}
        />
      )}
      {hero.artifacts.map((artifact, index) => (
        <ArtifactSlot
          artifactId={artifact}
          index={index}
          isUltimate={artifactById[artifact].isUltimate}
          key={index}
          onClick={handleArtifactClick}
          onMouseDown={artifactDetailsModal.onMouseDown}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleArtifactMouseOver}
          x={45 + (index % 7) * (ArtifactSlot.width + 3)}
          y={302 + Math.floor(index / 7) * (ArtifactSlot.height + 3)}
        />
      ))}
      {selectedArtifactIndex !== undefined && (
        <Modal
          onConfirmClick={artifactDetailsModal.close}
          open={artifactDetailsModal.isOpen}
          size={artifactDetailsModal.clickOpened ? 2 : 1}
          type={artifactDetailsModal.clickOpened ? 'okay' : undefined}
          x={177}
          y={29}
        >
          {t(`core:artifacts.${hero.artifacts[selectedArtifactIndex]}.description`)}
        </Modal>
      )}
      {allowDismiss && (
        <Button
          assets={assets.dismissButton}
          label={t('dismissLabel')}
          onClick={dismissConfirmModal.open}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleDismissMouseOver}
          x={8}
          y={318}
        />
      )}
      <Modal
        onCancelClick={dismissConfirmModal.close}
        onConfirmClick={handleConfirmDismissClick}
        open={dismissConfirmModal.isOpen}
        size={1}
        type="yesNo"
        x={177}
        y={29}
      >
        {t('dismissConfirm')}
      </Modal>
      <Button
        assets={assets.exitButton}
        label={t('exitLabel')}
        onClick={onExitClick}
        onMouseLeave={setDefaultStatusText}
        onMouseOver={handleExitMouseOver}
        x={602}
        y={318}
      />
      <Text align="center" size="large" width={640} y={462}>
        {statusText}
      </Text>
      <Modal onConfirmClick={notImplementedModal.close} open={notImplementedModal.isOpen} type="okay" x={177} y={29}>
        {t('core:notImplemented')}
      </Modal>
    </Window>
  );
};

HeroWindow.width = ScreenWidth;
HeroWindow.height = ScreenHeight;
