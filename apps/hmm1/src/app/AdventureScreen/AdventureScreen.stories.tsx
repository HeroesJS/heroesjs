import { Meta, StoryObj } from '@storybook/react-vite';

import { AdventureScreen } from './AdventureScreen';

const meta = {
  component: AdventureScreen,
} satisfies Meta<typeof AdventureScreen>;

export default meta;

type Story = StoryObj<typeof AdventureScreen>;

export const Primary: Story = {};
