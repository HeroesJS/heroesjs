import type { Meta, StoryObj } from '@storybook/react-vite';

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
    size: 1,
    type: 'okay',
  },
};

export const Content: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet...',
  },
};

export const Size: Story = {
  args: {
    ...Content.args,
    size: 1,
  },
};

export const Type: Story = {
  args: {
    ...Content.args,
    type: 'okay',
  },
};

export const Input: Story = {
  args: {
    ...Content.args,
    ...Type.args,
    inputLabel: 'Input Label',
    showInput: true,
    size: 1,
  },
};
