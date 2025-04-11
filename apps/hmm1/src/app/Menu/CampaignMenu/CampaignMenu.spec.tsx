import {screen} from '@testing-library/react';

import {Campaign} from '@heroesjs/hmm1-core';
import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {CampaignMenu} from './CampaignMenu';

describe(CampaignMenu, () => {
  it('renders', async () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('menu', {name: /campaign menu/i})).toBeInTheDocument();
  });

  describe('play lord ironfist button', () => {
    it('renders button', async () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', {name: /play lord ironfist/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

      await user.click(screen.getByRole('button', {name: /play lord ironfist/i}));

      expect(handler).toHaveBeenCalledWith(Campaign.LordIronfist);
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<CampaignMenu />);

      await user.rightDown(screen.getByRole('button', {name: /play lord ironfist/i}));

      expect(screen.getByText(/play the role of lord ironfist\./i)).toBeInTheDocument();
    });
  });

  describe('play lord slayer button', () => {
    it('renders button', async () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', {name: /play lord slayer/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

      await user.click(screen.getByRole('button', {name: /play lord slayer/i}));

      expect(handler).toHaveBeenCalledWith(Campaign.LordSlayer);
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<CampaignMenu />);

      await user.rightDown(screen.getByRole('button', {name: /play lord slayer/i}));

      expect(screen.getByText(/play the role of lord slayer\./i)).toBeInTheDocument();
    });
  });

  describe('play queen lamanda button', () => {
    it('renders button', async () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', {name: /play queen lamanda/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

      await user.click(screen.getByRole('button', {name: /play queen lamanda/i}));

      expect(handler).toHaveBeenCalledWith(Campaign.QueenLamanda);
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<CampaignMenu />);

      await user.rightDown(screen.getByRole('button', {name: /play queen lamanda/i}));

      expect(screen.getByText(/play the role of queen lamanda\./i)).toBeInTheDocument();
    });
  });

  describe('play lord alamar button', () => {
    it('renders button', async () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', {name: /play lord alamar/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<CampaignMenu onCampaignClick={handler} />);

      await user.click(screen.getByRole('button', {name: /play lord alamar/i}));

      expect(handler).toHaveBeenCalledWith(Campaign.LordAlamar);
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<CampaignMenu />);

      await user.rightDown(screen.getByRole('button', {name: /play lord alamar/i}));

      expect(screen.getByText(/play the role of lord alamar\./i)).toBeInTheDocument();
    });
  });

  describe('cancel button', () => {
    it('renders button', async () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<CampaignMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<CampaignMenu />);

      await user.rightDown(screen.getByRole('button', {name: /cancel/i}));

      expect(screen.getByText(/cancel back to the main menu\./i)).toBeInTheDocument();
    });
  });
});
