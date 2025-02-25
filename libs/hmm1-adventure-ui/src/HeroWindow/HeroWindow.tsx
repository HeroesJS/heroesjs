import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text, useModal, Window } from '@heroesjs/hmm1-base-ui';
import { type Skill, skills } from '@heroesjs/hmm1-core';

import * as assets from './assets';
import { SkillInfo } from './SkillInfo';

interface Props {
  readonly allowDismiss?: boolean;
  readonly onDismissClick?: () => void;
  readonly onExitClick?: () => void;
}

export const HeroWindow = ({ allowDismiss, onDismissClick, onExitClick }: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.heroWindow' });

  const [statusText, setStatusText] = useState(t('title'));

  const heroName = 'Falagar the Warlock';

  const setDefaultStatusText = useCallback(() => setStatusText(t('defaultStatusText')), [t]);

  const handleSkillMouseOver = useCallback(
    (value: Skill) => setStatusText(t('viewSkillInfoStatusText', { name: t(`core:skill.${value}`) })),
    [t],
  );

  const dismissConfirm = useModal();

  const handleDismissMouseOver = useCallback(() => setStatusText(t('dismissStatusText', { name: heroName })), [t]);

  const handleExitMouseOver = useCallback(() => setStatusText(t('exitStatusText')), [t]);

  return (
    <Window background={assets.background} height={480} label={t('title')} width={640}>
      {skills.map((skill, i) => (
        <SkillInfo
          onMouseLeave={setDefaultStatusText}
          onMouseOver={handleSkillMouseOver}
          skill={skill}
          x={156 + i * (SkillInfo.width + 6)}
          y={101}
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
