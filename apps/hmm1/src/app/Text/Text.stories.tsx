import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
  component: Text,
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Highlighted: Story = {
  args: {
    highlighted: true,
  },
};
