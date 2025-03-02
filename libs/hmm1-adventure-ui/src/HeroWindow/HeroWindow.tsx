import { compact, range } from 'lodash';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text, useModal, Window } from '@heroesjs/hmm1-base-ui';
import {
  creatureById,
  CreatureId,
  HeroClassId,
  HeroId,
  PlayerColor,
  ScreenHeight,
  ScreenWidth,
  Skill,
  skills,
  type SkillValues,
  Town,
} from '@heroesjs/hmm1-core';

import { Crest } from '../Crest';
import { HeroPortrait } from '../HeroPortrait';
import { TroopDetailsWindow } from '../TroopDetailsWindow';
import { TroopSlot } from '../TroopSlot';

import * as assets from './assets';
import { SkillInfo } from './SkillInfo';

const playerColor = PlayerColor.Red;
const heroId = HeroId.Falagar;
const heroName = 'Falagar the Warlock';
const heroClass = HeroClassId.Warlock;
const heroSkills: SkillValues = {
  [Skill.Attack]: 0,
  [Skill.Defense]: 0,
  [Skill.Knowledge]: 2,
  [Skill.SpellPower]: 3,
};
const troops = [
  {
    count: 7,
    creature: CreatureId.Centaur,
    origin: Town.Mountains,
  },
  {
    count: 2,
    creature: CreatureId.Gargoyle,
    origin: Town.Mountains,
  },
];

interface Props {
  readonly allowDismiss?: boolean;
  readonly onDismissClick?: () => void;
  readonly onDismissTroop?: (index: number) => void;
  readonly onExitClick?: () => void;
  readonly onKingdomOverviewClick?: () => void;
  readonly onMoveTroop?: (index: number, targetIndex: number) => void;
}

export const HeroWindow = ({
  allowDismiss,
  onDismissClick,
  onDismissTroop,
  onExitClick,
  onKingdomOverviewClick,
  onMoveTroop,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.heroWindow' });

  const [selectedTroopIndex, setSelectedTroopIndex] = useState<number>();

  const [statusText, setStatusText] = useState(t('title'));

  const setDefaultStatusText = useCallback(() => setStatusText(t('defaultStatusText')), [t]);

  const handleSkillMouseOver = useCallback(
    (value: Skill) => setStatusText(t('viewSkillInfoStatusText', { name: t(`core:skill.${value}`) })),
    [t],
  );

  const handleCrestMouseOver = useCallback(() => setStatusText(t('kingdomOverviewStatusText')), [t]);

  const handleTroopMouseOver = useCallback(
    (index: number) => {
      const troop = troops[index];
      const selectedTroop = selectedTroopIndex !== undefined ? troops[selectedTroopIndex] : undefined;

      if (selectedTroop) {
        setStatusText(
          troop !== selectedTroop
            ? troop
              ? t('exchangeTroop', {
                  name: t(`core:creatures.${selectedTroop.creature}`),
                  otherName: t(`core:creatures.${troop.creature}`),
                })
              : t('moveTroop', { name: t(`core:creatures.${selectedTroop.creature}`) })
            : t('selectTroop', { name: t(`core:creatures.${troop.creature}`) }),
        );
      } else {
        setStatusText(troop ? t('selectTroop', { name: t(`core:creatures.${troop.creature}`) }) : t('noTroop'));
      }
    },
    [selectedTroopIndex, t],
  );

  const [troopInfoIndex, setTroopInfoIndex] = useState<number>();
  const infoTroop = troopInfoIndex !== undefined ? troops[troopInfoIndex] : undefined;

  const troopInfoModal = useModal(
    undefined,
    (index: number) => setTroopInfoIndex(index),
    () => setTroopInfoIndex(undefined),
  );

  const troopDetailsModal = useModal();

  const handleTroopClick = useCallback(
    (index: number) => {
      if (selectedTroopIndex === undefined) {
        if (!troops[index]) {
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
      }
    },
    [onMoveTroop, selectedTroopIndex, troopDetailsModal],
  );

  const handleDismissTroopClick = useCallback(() => {
    troopDetailsModal.close();

    onDismissTroop?.(selectedTroopIndex!);

    setSelectedTroopIndex(undefined);
  }, [onDismissTroop, selectedTroopIndex, troopDetailsModal]);

  const handleExitTroopDetailsClick = useCallback(() => {
    troopDetailsModal.close();

    setSelectedTroopIndex(undefined);
  }, [troopDetailsModal]);

  const dismissConfirm = useModal();

  const handleDismissMouseOver = useCallback(() => setStatusText(t('dismissStatusText', { name: heroName })), [t]);

  const handleExitMouseOver = useCallback(() => setStatusText(t('exitStatusText')), [t]);

  const selectedTroop = selectedTroopIndex !== undefined ? troops[selectedTroopIndex] : undefined;

  return (
    <Window background={assets.background} height={HeroWindow.height} label={t('title')} width={HeroWindow.width}>
      <Text align="center" size="large" width={HeroWindow.width} y={72}>
        {heroName}
      </Text>
      <HeroPortrait heroId={heroId} x={49} y={101} />
      {skills.map((skill, i) => (
        <SkillInfo
          key={skill}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleSkillMouseOver}
          skill={skill}
          value={heroSkills[skill]}
          x={156 + i * (SkillInfo.width + 6)}
          y={101}
        />
      ))}
      <Crest
        color={playerColor}
        heroClass={heroClass}
        label={t('kingdomOverviewLabel')}
        onClick={onKingdomOverviewClick}
        onMouseLeave={setDefaultStatusText}
        onMouseOver={handleCrestMouseOver}
        x={49}
        y={200}
      />
      {range(0, 5).map((index, i) => (
        <TroopSlot
          {...troops[index]}
          {...troopInfoModal.handlers}
          index={index}
          key={index}
          onClick={handleTroopClick}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleTroopMouseOver}
          selected={selectedTroopIndex === index}
          x={156 + i * (TroopSlot.width + 6)}
          y={200}
        />
      ))}
      {infoTroop && troopInfoModal.isOpen && (
        <TroopDetailsWindow
          count={infoTroop.count}
          creature={creatureById[infoTroop.creature]}
          hideExit
          skillsBonus={heroSkills}
          x={119}
          y={50}
        />
      )}
      {selectedTroop && troopDetailsModal.isOpen && (
        <TroopDetailsWindow
          allowDismiss={compact(troops).length > 1}
          count={selectedTroop.count}
          creature={creatureById[selectedTroop.creature]}
          onDismissClick={handleDismissTroopClick}
          onExitClick={handleExitTroopDetailsClick}
          skillsBonus={heroSkills}
          x={119}
          y={50}
        />
      )}
      {allowDismiss && (
        <Button
          assets={assets.dismissButton}
          label={t('dismissLabel')}
          onClick={dismissConfirm.open}
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleDismissMouseOver}
          x={8}
          y={318}
        />
      )}
      <Modal
        onCancelClick={dismissConfirm.close}
        onConfirmClick={onDismissClick}
        open={dismissConfirm.isOpen}
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
    </Window>
  );
};

HeroWindow.width = ScreenWidth;
HeroWindow.height = ScreenHeight;
