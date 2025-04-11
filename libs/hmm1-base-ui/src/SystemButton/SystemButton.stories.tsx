import type {Meta, StoryObj} from '@storybook/react';

import {SystemButton} from './SystemButton';

const meta: Meta<typeof SystemButton> = {
  component: SystemButton,
};

export default meta;

type Story = StoryObj<typeof SystemButton>;

export const Primary: Story = {};

export const Yes: Story = {
  args: {
    type: 'yes',
  },
};

export const No: Story = {
  args: {
    type: 'no',
  },
};

export const Okay: Story = {
  args: {
    type: 'okay',
  },
};

export const Cancel: Story = {
  args: {
    type: 'cancel',
  },
};
