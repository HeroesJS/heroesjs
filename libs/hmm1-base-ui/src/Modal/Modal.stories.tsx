import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  args: {
    open: true,
  },
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};

export const Size: Story = {
  args: {
    size: 2,
  },
};

export const YesNo: Story = {
  args: {
    type: 'yesNo',
  },
};

export const OkayCancel: Story = {
  args: {
    type: 'okayCancel',
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
