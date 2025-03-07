import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Modal, PositionedComponent, type PositionProps, Text, useModal } from '@heroesjs/hmm1-base-ui';
import type { Skill } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: (value: Skill) => void;
  readonly skill: Skill;
  readonly value?: number;
}

export const SkillInfo = ({ onMouseLeave, onMouseOver, skill, value = 0, x, y }: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.heroWindow' });

  const infoModal = useModal();
  const descriptionModal = useModal();

  const handleMouseOver = useCallback(() => onMouseOver?.(skill), [onMouseOver, skill]);

  return (
    <Root
      {...infoModal.handlers}
      aria-labelledby={`${skill}-skill-info`}
      onClick={descriptionModal.open}
      onMouseLeave={onMouseLeave}
      onMouseOver={handleMouseOver}
      skill={skill}
      x={x}
      y={y}
    >
      <Text align="center" id={`${skill}-skill-info`} size="small" width={SkillInfo.width} y={6}>
        {t(`core:skill.${skill}`)}
      </Text>
      <Text align="center" size="large" width={SkillInfo.width} y={71}>
        {value}
      </Text>
      <Modal
        onConfirmClick={descriptionModal.close}
        open={infoModal.isOpen || descriptionModal.isOpen}
        size={descriptionModal.isOpen ? 2 : 1}
        type={descriptionModal.isOpen ? 'okay' : undefined}
        x={177}
        y={29}
      >
        {t(`skillDescription.${skill}`)}
      </Modal>
    </Root>
  );
};

SkillInfo.width = 82;
SkillInfo.height = 93;

const Root = styled(PositionedComponent)<Pick<Props, 'skill'>>(({ skill }) => ({
  background: `url(${assets.skillBackground[skill]})`,
  height: SkillInfo.height,
  width: SkillInfo.width,
}));
