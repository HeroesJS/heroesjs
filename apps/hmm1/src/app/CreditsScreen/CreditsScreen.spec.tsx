import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { CreditsScreen } from './CreditsScreen';

describe(CreditsScreen, () => {
  it('should render', () => {
    renderWithProviders(<CreditsScreen />);

    expect(screen.getByRole('main', { name: /credits/i })).toBeInTheDocument();
  });
});
