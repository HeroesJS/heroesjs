import type { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from '@heroesjs/hmm1-base-ui';

import { AdventureWindow } from './AdventureWindow';

const meta: Meta<typeof AdventureWindow> = {
  args: {
    renderActionButtons: () => <Placeholder label="Action Buttons" />,
    renderAdventureMap: () => <Placeholder label="Adventure Map" />,
    renderHeroLocators: () => <Placeholder label="Hero Locators" />,
    renderStatusWindow: () => <Placeholder label="Status Window" />,
    renderTownLocators: () => <Placeholder label="Town Locators" />,
    renderWorldMap: () => <Placeholder label="World Map" />,
  },
  component: AdventureWindow,
};

export default meta;

type Story = StoryObj<typeof AdventureWindow>;

export const Primary: Story = {};
