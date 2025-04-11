import type {Meta, StoryObj} from '@storybook/react';

import {HeroWindow} from './HeroWindow';

const meta: Meta<typeof HeroWindow> = {
  component: HeroWindow,
};

export default meta;

type Story = StoryObj<typeof HeroWindow>;

export const Primary: Story = {};

export const Dismissal: Story = {
  args: {
    allowDismiss: true,
  },
};
