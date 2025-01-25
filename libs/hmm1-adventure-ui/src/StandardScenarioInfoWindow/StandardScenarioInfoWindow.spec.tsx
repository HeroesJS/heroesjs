import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { StandardScenarioInfoWindow } from './StandardScenarioInfoWindow';

describe(StandardScenarioInfoWindow, () => {
  it('renders okay button', () => {
    renderWithProviders(<StandardScenarioInfoWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('calls handler when okay button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<StandardScenarioInfoWindow onConfirmClick={handler} />);

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });
});
