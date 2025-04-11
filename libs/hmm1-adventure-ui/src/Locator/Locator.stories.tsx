import type {Meta, StoryObj} from '@storybook/react';

import {Locator} from './Locator';

const meta: Meta<typeof Locator> = {
  component: Locator,
};

export default meta;

type Story = StoryObj<typeof Locator>;

export const Primary: Story = {};

export const Index: Story = {
  args: {
    index: 1,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
