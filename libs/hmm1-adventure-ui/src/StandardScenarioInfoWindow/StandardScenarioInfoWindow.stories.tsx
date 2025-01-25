import type { Meta, StoryObj } from '@storybook/react';

import { StandardScenarioInfoWindow } from './StandardScenarioInfoWindow';

const meta: Meta<typeof StandardScenarioInfoWindow> = {
  component: StandardScenarioInfoWindow,
};

export default meta;

type Story = StoryObj<typeof StandardScenarioInfoWindow>;

export const Primary: Story = {};
