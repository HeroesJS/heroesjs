import type { Meta, StoryObj } from '@storybook/react-vite';

import { ScenarioInfoWindow } from './ScenarioInfoWindow';

const meta = {
  args: {
    open: true,
  },
  component: ScenarioInfoWindow,
} satisfies Meta<typeof ScenarioInfoWindow>;

export default meta;

type Story = StoryObj<typeof ScenarioInfoWindow>;

export const Primary: Story = {};
