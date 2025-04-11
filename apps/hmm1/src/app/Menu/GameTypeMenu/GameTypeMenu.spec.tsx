import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {GameTypeMenu} from './GameTypeMenu';

describe(GameTypeMenu, () => {
  it('renders', async () => {
    renderWithProviders(<GameTypeMenu />);

    expect(screen.getByRole('menu', {name: /game type menu/i})).toBeInTheDocument();
  });

  describe('standard game button', () => {
    it('renders button', async () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', {name: /standard game/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<GameTypeMenu onStandardGameClick={handler} />);

      await user.click(screen.getByRole('button', {name: /standard game/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<GameTypeMenu />);

      await user.rightDown(screen.getByRole('button', {name: /standard game/i}));

      expect(screen.getByText(/a single player game playing out a single map\./i)).toBeInTheDocument();
    });
  });

  describe('campaign game button', () => {
    it('renders button', async () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', {name: /campaign game/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<GameTypeMenu onCampaignGameClick={handler} />);

      await user.click(screen.getByRole('button', {name: /campaign game/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<GameTypeMenu />);

      await user.rightDown(screen.getByRole('button', {name: /campaign game/i}));

      expect(screen.getByText(/a single player game playing through a series of maps\./i)).toBeInTheDocument();
    });
  });

  describe('multi-player game button', () => {
    it('renders button', async () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', {name: /multi-player game/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<GameTypeMenu onMultiPlayerGameClick={handler} />);

      await user.click(screen.getByRole('button', {name: /multi-player game/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<GameTypeMenu />);

      await user.rightDown(screen.getByRole('button', {name: /multi-player game/i}));

      expect(
        screen.getByText(
          /a multi-player game, with several human players, competing against each other on a single map\./i,
        ),
      ).toBeInTheDocument();
    });
  });

  describe('cancel button', () => {
    it('renders button', async () => {
      renderWithProviders(<GameTypeMenu />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<GameTypeMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<GameTypeMenu />);

      await user.rightDown(screen.getByRole('button', {name: /cancel/i}));

      expect(screen.getByText(/cancel back to main menu\./i)).toBeInTheDocument();
    });
  });
});
