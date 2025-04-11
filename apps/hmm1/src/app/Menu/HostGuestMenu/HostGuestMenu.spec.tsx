import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {HostGuestMenu} from './HostGuestMenu';

describe(HostGuestMenu, () => {
  it('renders', async () => {
    renderWithProviders(<HostGuestMenu />);

    expect(screen.getByRole('menu', {name: /host\/guest menu/i})).toBeInTheDocument();
  });

  describe('host button', () => {
    it('renders button', async () => {
      renderWithProviders(<HostGuestMenu />);

      expect(screen.getByRole('button', {name: /host/i})).toBeInTheDocument();
    });

    it('renders button when detailed', async () => {
      renderWithProviders(<HostGuestMenu detailed />);

      expect(screen.getByRole('button', {name: /host \(dials\)/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<HostGuestMenu onHostClick={handler} />);

      await user.click(screen.getByRole('button', {name: /host/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<HostGuestMenu />);

      await user.rightDown(screen.getByRole('button', {name: /host/i}));

      expect(
        screen.getByText(/the host sets up the game options\. there can only be one host per network game\./i),
      ).toBeInTheDocument();
    });

    it('renders info when detailed and button is right-clicked', async () => {
      const {user} = renderWithProviders(<HostGuestMenu detailed />);

      await user.rightDown(screen.getByRole('button', {name: /host/i}));

      expect(
        screen.getByText(/the host sets up the game options, chooses the number to dial, and places the call\./i),
      ).toBeInTheDocument();
    });
  });

  describe('guest button', () => {
    it('renders button', async () => {
      renderWithProviders(<HostGuestMenu />);

      expect(screen.getByRole('button', {name: /guest/i})).toBeInTheDocument();
    });

    it('renders button when detailed', async () => {
      renderWithProviders(<HostGuestMenu detailed />);

      expect(screen.getByRole('button', {name: /guest \(answers\)/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<HostGuestMenu onGuestClick={handler} />);

      await user.click(screen.getByRole('button', {name: /guest/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<HostGuestMenu />);

      await user.rightDown(screen.getByRole('button', {name: /guest/i}));

      expect(
        screen.getByText(
          /the guest waits for the host to set up the game, then is automatically added in\. there can only be one guest per network game\./i,
        ),
      ).toBeInTheDocument();
    });

    it('renders info when detailed and button is right-clicked', async () => {
      const {user} = renderWithProviders(<HostGuestMenu detailed />);

      await user.rightDown(screen.getByRole('button', {name: /guest/i}));

      expect(screen.getByText(/the guest waits for the host to call and set up the game\./i)).toBeInTheDocument();
    });
  });

  describe('cancel button', () => {
    it('renders button', async () => {
      renderWithProviders(<HostGuestMenu />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<HostGuestMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<HostGuestMenu />);

      await user.rightDown(screen.getByRole('button', {name: /cancel/i}));

      expect(screen.getByText(/cancel back to the main menu\./i)).toBeInTheDocument();
    });
  });
});
