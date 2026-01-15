import type { Meta, StoryObj } from '@storybook/react-vite';

import { MapDifficulty, MapSize } from '../map';
import { FileSelectorWindow } from './FileSelectorWindow';

const meta = {
  component: FileSelectorWindow,
} satisfies Meta<typeof FileSelectorWindow>;

export default meta;

type Story = StoryObj<typeof FileSelectorWindow>;

export const Primary: Story = {};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const Items: Story = {
  args: {
    items: [
      {
        label: 'Item',
        value: 'item',
      },
    ],
  },
};

export const SelectedItem: Story = {
  args: {
    ...Items.args,
    value: 'item',
  },
};

export const EmptyScenarioDetail: Story = {
  args: {
    showScenarioDetail: true,
  },
};

export const ScenarioDetail: Story = {
  args: {
    ...EmptyScenarioDetail.args,
    items: [
      {
        label: 'Scenario Name',
        value: 'scenario',
      },
    ],
    scenarioDetail: {
      description: 'Scenario Description',
      difficulty: MapDifficulty.Easy,
      size: MapSize.Small,
    },
    value: 'scenario',
  },
};
