import {screen} from '@testing-library/react';
import type {ComponentProps} from 'react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {CampaignScenarioInfoWindow} from './CampaignScenarioInfoWindow';

describe(CampaignScenarioInfoWindow, () => {
  const scenario: ComponentProps<typeof CampaignScenarioInfoWindow>['scenario'] = {
    description: 'My Scenario Description',
    name: 'My Scenario',
    number: 6,
  };

  it('renders window', () => {
    renderWithProviders(<CampaignScenarioInfoWindow scenario={scenario} />);

    expect(screen.getByRole('dialog', {name: /scenario info window/i})).toBeInTheDocument();
  });

  it('renders scenario number', () => {
    renderWithProviders(<CampaignScenarioInfoWindow scenario={scenario} />);

    expect(screen.getByLabelText(/number 6/i)).toBeInTheDocument();
  });

  it('renders scenario name', () => {
    renderWithProviders(<CampaignScenarioInfoWindow scenario={scenario} />);

    expect(screen.getByLabelText(/name/i)).toHaveTextContent(/my scenario/i);
  });

  it('renders scenario description', () => {
    renderWithProviders(<CampaignScenarioInfoWindow scenario={scenario} />);

    expect(screen.getByLabelText(/description/i)).toHaveTextContent(/my scenario description/i);
  });

  it('renders confirm button', () => {
    renderWithProviders(<CampaignScenarioInfoWindow scenario={scenario} />);

    expect(screen.getByRole('button', {name: /okay/i})).toBeInTheDocument();
  });

  it('calls handler when confirm button is clicked', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(<CampaignScenarioInfoWindow onConfirmClick={handler} scenario={scenario} />);

    await user.click(screen.getByRole('button', {name: /okay/i}));

    expect(handler).toHaveBeenCalled();
  });

  it('renders restart button when restart is allowed', () => {
    renderWithProviders(<CampaignScenarioInfoWindow allowRestart scenario={scenario} />);

    expect(screen.getByRole('button', {name: /restart scenario/i})).toBeInTheDocument();
  });

  it('calls handler when restart button is clicked', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(
      <CampaignScenarioInfoWindow allowRestart onRestartClick={handler} scenario={scenario} />,
    );

    await user.click(screen.getByRole('button', {name: /restart scenario/i}));

    expect(handler).toHaveBeenCalled();
  });
});
