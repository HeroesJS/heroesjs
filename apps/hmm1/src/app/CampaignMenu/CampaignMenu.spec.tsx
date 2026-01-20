import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { CampaignMenu } from './CampaignMenu';

describe(CampaignMenu, () => {
  it('should render', () => {
    renderWithProviders(<CampaignMenu />);

    expect(screen.getByRole('menu', { name: /campaign menu/i })).toBeInTheDocument();
  });

  describe('play lord ironfist button', () => {
    it('should render', () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', { name: /play lord ironfist/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<CampaignMenu onPlayLordIronfistClick={handler} />);

      await user.click(screen.getByRole('button', { name: /play lord ironfist/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<CampaignMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /play lord ironfist/i }));

      expect(screen.getByRole('dialog', { name: /play the role of lord ironfist\./i }));
    });
  });

  describe('play lord slayer button', () => {
    it('should render', () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', { name: /play lord slayer/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<CampaignMenu onPlayLordSlayerClick={handler} />);

      await user.click(screen.getByRole('button', { name: /play lord slayer/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<CampaignMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /play lord slayer/i }));

      expect(screen.getByRole('dialog', { name: /play the role of lord slayer\./i }));
    });
  });

  describe('play queen lamanda button', () => {
    it('should render', () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', { name: /play queen lamanda/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<CampaignMenu onPlayQueenLamandaClick={handler} />);

      await user.click(screen.getByRole('button', { name: /play queen lamanda/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<CampaignMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /play queen lamanda/i }));

      expect(screen.getByRole('dialog', { name: /play the role of queen lamanda\./i }));
    });
  });

  describe('play lord alamar button', () => {
    it('should render', () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', { name: /play lord alamar/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<CampaignMenu onPlayLordAlamarClick={handler} />);

      await user.click(screen.getByRole('button', { name: /play lord alamar/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<CampaignMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /play lord alamar/i }));

      expect(screen.getByRole('dialog', { name: /play the role of lord alamar\./i }));
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<CampaignMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<CampaignMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<CampaignMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /cancel back to the main menu\./i }));
    });
  });
});
