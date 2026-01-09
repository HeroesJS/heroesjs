import type { Meta, StoryObj } from '@storybook/react';

import { CycleToggle } from './CycleToggle';

const meta = {
  args: {
    children: (v) => v,
    label: 'Label',
    options: ['A', 'B', 'C'],
    value: 'A',
  },
  component: CycleToggle,
} satisfies Meta<typeof CycleToggle<string>>;

export default meta;

type Story = StoryObj<typeof CycleToggle>;

export const Primary: Story = {};
