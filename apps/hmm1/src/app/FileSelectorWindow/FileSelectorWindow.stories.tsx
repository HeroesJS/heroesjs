import type { Meta, StoryObj } from '@storybook/react';

import { FileSelectorWindow } from './FileSelectorWindow';

const meta: Meta<typeof FileSelectorWindow> = {
  component: FileSelectorWindow,
};

export default meta;

type Story = StoryObj<typeof FileSelectorWindow>;

export const Primary: Story = {};
