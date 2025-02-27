import { range } from 'lodash';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text, useModal, Window } from '@heroesjs/hmm1-base-ui';
import {
  CreatureId,
  HeroClassId,
  HeroId,
  PlayerColor,
  ScreenHeight,
  ScreenWidth,
  type Skill,
  skills,
  Town,
} from '@heroesjs/hmm1-core';

import { Crest } from '../Crest';
import { HeroPortrait } from '../HeroPortrait';
import { TroopSlot } from '../TroopSlot';

import * as assets from './assets';
import { SkillInfo } from './SkillInfo';

const playerColor = PlayerColor.Red;
const heroId = HeroId.Falagar;
const heroName = 'Falagar the Warlock';
const heroClass = HeroClassId.Warlock;
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
  readonly onExitClick?: () => void;
  readonly onKingdomOverviewClick?: () => void;
  readonly onMoveTroop?: (index: number, targetIndex: number) => void;
}

export const HeroWindow = ({
  allowDismiss,
  onDismissClick,
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

  const troopDetailsModal = useModal();

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

  const dismissConfirm = useModal();

  const handleDismissMouseOver = useCallback(() => setStatusText(t('dismissStatusText', { name: heroName })), [t]);

  const handleExitMouseOver = useCallback(() => setStatusText(t('exitStatusText')), [t]);

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
