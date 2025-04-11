import type {Meta, StoryObj} from '@storybook/react';

import {ArtifactId} from '@heroesjs/hmm1-core';

import {ArtifactSlot} from './ArtifactSlot';

const meta: Meta<typeof ArtifactSlot> = {
  args: {
    index: 0,
  },
  component: ArtifactSlot,
};

export default meta;

type Story = StoryObj<typeof ArtifactSlot>;

export const Primary: Story = {
  args: {
    artifactId: ArtifactId.DragonSwordOfDominion,
    isUltimate: true,
  },
};

export const Empty: Story = {
  args: {},
};

export const Artifact: Story = {
  args: {
    artifactId: ArtifactId.DragonSwordOfDominion,
  },
};

export const UltimateArtifact: Story = {
  args: {
    artifactId: ArtifactId.DragonSwordOfDominion,
    isUltimate: true,
  },
};
