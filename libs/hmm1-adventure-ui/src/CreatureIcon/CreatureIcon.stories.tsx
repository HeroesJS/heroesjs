import type { Meta, StoryObj } from '@storybook/react';

import { CreatureId } from '@heroesjs/hmm1-core';

import { CreatureIcon } from './CreatureIcon';

const meta: Meta<typeof CreatureIcon> = {
  args: {
    creature: CreatureId.Peasant,
    size: 'large',
  },
  component: CreatureIcon,
};

export default meta;

type Story = StoryObj<typeof CreatureIcon>;

export const Primary: Story = {};
