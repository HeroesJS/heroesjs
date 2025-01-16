import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';
import { Campaign } from '../../core';

import { CampaignMenu } from './CampaignMenu';

describe(CampaignMenu, () => {
  it('renders', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('menu', { name: /campaign menu/i })).toBeInTheDocument();
  });

  it('renders play lord ironfist button', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('button', { name: /play lord ironfist/i })).toBeInTheDocument();
  });

  it('calls handler when play lord ironfist button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

    await user.click(screen.getByRole('button', { name: /play lord ironfist/i }));

    expect(handler).toHaveBeenCalledWith(Campaign.LordIronfist);
  });

  it('renders play lord slayer button', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('button', { name: /play lord slayer/i })).toBeInTheDocument();
  });

  it('calls handler when play lord slayer button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

    await user.click(screen.getByRole('button', { name: /play lord slayer/i }));

    expect(handler).toHaveBeenCalledWith(Campaign.LordSlayer);
  });

  it('renders play queen lamanda button', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('button', { name: /play queen lamanda/i })).toBeInTheDocument();
  });

  it('calls handler when play queen lamanda button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

    await user.click(screen.getByRole('button', { name: /play queen lamanda/i }));

    expect(handler).toHaveBeenCalledWith(Campaign.QueenLamanda);
  });

  it('renders play lord alamar button', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('button', { name: /play lord alamar/i })).toBeInTheDocument();
  });

  it('calls handler when play lord alamar button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

    await user.click(screen.getByRole('button', { name: /play lord alamar/i }));

    expect(handler).toHaveBeenCalledWith(Campaign.LordAlamar);
  });

  it('renders cancel button', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<CampaignMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
