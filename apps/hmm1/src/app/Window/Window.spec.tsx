import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { Window } from './Window';

describe(Window, () => {
  it('should render', () => {
    renderWithProviders(<Window background="" height={10} label="Label" open width={20} />);

    expect(screen.getByRole('region', { name: /label/i })).toBeInTheDocument();
  });

  it('should not render when not open', () => {
    renderWithProviders(<Window background="" height={10} label="Label" open={false} width={20} />);

    expect(screen.queryByRole('region', { name: /label/i })).not.toBeInTheDocument();
  });
});
