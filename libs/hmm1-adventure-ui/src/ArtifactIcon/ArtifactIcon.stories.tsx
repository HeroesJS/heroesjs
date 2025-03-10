import type { Meta, StoryObj } from '@storybook/react';

import { ArtifactId } from '@heroesjs/hmm1-core';

import { ArtifactIcon } from './ArtifactIcon';

const meta: Meta<typeof ArtifactIcon> = {
  args: {
    id: ArtifactId.DragonSwordOfDominion,
    size: 'large',
  },
  component: ArtifactIcon,
};

export default meta;

type Story = StoryObj<typeof ArtifactIcon>;

export const Primary: Story = {};

export const Small: Story = {
  args: {
    ...meta.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...meta.args,
    size: 'large',
  },
};
