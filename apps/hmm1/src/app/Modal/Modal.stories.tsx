import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  args: {
    open: true,
  },
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet...',
  },
};

export const Size: Story = {
  args: {
    size: 1,
  },
};

export const Content: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet...',
  },
};
