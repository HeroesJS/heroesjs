import { screen } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils';
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
  });
});
