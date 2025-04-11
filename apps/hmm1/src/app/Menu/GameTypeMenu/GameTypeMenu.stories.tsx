import type {Meta, StoryObj} from '@storybook/react';

import {GameTypeMenu} from './GameTypeMenu';

const meta: Meta<typeof GameTypeMenu> = {
  component: GameTypeMenu,
};

export default meta;

type Story = StoryObj<typeof GameTypeMenu>;

export const Primary: Story = {};
