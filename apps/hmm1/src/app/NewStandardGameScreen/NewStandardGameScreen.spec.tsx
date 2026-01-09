import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameScreen } from './NewStandardGameScreen';

describe(NewStandardGameScreen, () => {
  it('should render screen', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('main', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render window', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should call cancel handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<NewStandardGameScreen onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
