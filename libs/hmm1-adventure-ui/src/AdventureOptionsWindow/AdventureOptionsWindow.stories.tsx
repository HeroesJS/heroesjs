import type {Meta, StoryObj} from '@storybook/react';

import {AdventureOptionsWindow} from './AdventureOptionsWindow';

const meta: Meta<typeof AdventureOptionsWindow> = {
  component: AdventureOptionsWindow,
};

export default meta;

type Story = StoryObj<typeof AdventureOptionsWindow>;

export const Primary: Story = {};
