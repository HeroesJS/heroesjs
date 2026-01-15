import type { Meta, StoryObj } from '@storybook/react-vite';
import { Screen } from './Screen';

import { background } from './storyAssets';

const meta = {
  args: {
    background,
    label: 'Label',
  },
  component: Screen,
} satisfies Meta<typeof Screen>;

export default meta;

type Story = StoryObj<typeof Screen>;

export const Primary: Story = {};
