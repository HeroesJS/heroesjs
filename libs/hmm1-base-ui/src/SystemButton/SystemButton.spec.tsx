import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { SystemButton } from './SystemButton';

describe(SystemButton, () => {
  it('renders yes button when type is yes', () => {
    renderWithProviders(<SystemButton type="yes" />);

    expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
  });

  it('renders no button when type is no', () => {
    renderWithProviders(<SystemButton type="no" />);

    expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();
  });

  it('renders okay button when type is okay', () => {
    renderWithProviders(<SystemButton type="okay" />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('renders cancel button when type is cancel', () => {
    renderWithProviders(<SystemButton type="cancel" />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<SystemButton onClick={handler} type="okay" />);

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });
});
