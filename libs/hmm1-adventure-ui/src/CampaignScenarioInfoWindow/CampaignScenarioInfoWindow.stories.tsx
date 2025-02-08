import { type Meta, type StoryObj } from '@storybook/react';

import { campaignScenarios } from '@heroesjs/hmm1-core';

import { CampaignScenarioInfoWindow } from './CampaignScenarioInfoWindow';

const scenario = campaignScenarios[0];

const meta: Meta<typeof CampaignScenarioInfoWindow> = {
  args: {
    scenario: {
      description: scenario.description,
      name: scenario.name,
      number: scenario.number,
    },
  },
  component: CampaignScenarioInfoWindow,
};

export default meta;

type Story = StoryObj<typeof CampaignScenarioInfoWindow>;

export const Primary: Story = {};

export const Restart: Story = {
  args: {
    allowRestart: true,
  },
};
