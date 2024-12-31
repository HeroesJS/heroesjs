import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import { HostGuestMenu } from './HostGuestMenu';

describe(HostGuestMenu, () => {
  it('renders', async () => {
    renderWithProviders(<HostGuestMenu />);

    expect(screen.getByRole('menu', { name: /host\/guest menu/i })).toBeInTheDocument();
  });

  it('renders host button', async () => {
    renderWithProviders(<HostGuestMenu />);

    expect(screen.getByRole('button', { name: /host/i })).toBeInTheDocument();
  });

  it('calls handler when host button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<HostGuestMenu onHostClick={handler} />);

    await user.click(screen.getByRole('button', { name: /host/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders guest button', async () => {
    renderWithProviders(<HostGuestMenu />);

    expect(screen.getByRole('button', { name: /guest/i })).toBeInTheDocument();
  });

  it('calls handler when guest button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<HostGuestMenu onGuestClick={handler} />);

    await user.click(screen.getByRole('button', { name: /guest/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cancel button', async () => {
    renderWithProviders(<HostGuestMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<HostGuestMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders host button when detailed', async () => {
    renderWithProviders(<HostGuestMenu detailed />);

    expect(screen.getByRole('button', { name: /host \(dials\)/i })).toBeInTheDocument();
  });

  it('renders guest button when detailed', async () => {
    renderWithProviders(<HostGuestMenu detailed />);

    expect(screen.getByRole('button', { name: /guest \(answers\)/i })).toBeInTheDocument();
  });
});
