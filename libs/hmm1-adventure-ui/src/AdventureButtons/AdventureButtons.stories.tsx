import type {Meta, StoryObj} from '@storybook/react';

import {AdventureButtons} from './AdventureButtons';

const meta: Meta<typeof AdventureButtons> = {
  component: AdventureButtons,
};

export default meta;

type Story = StoryObj<typeof AdventureButtons>;

export const Primary: Story = {};
