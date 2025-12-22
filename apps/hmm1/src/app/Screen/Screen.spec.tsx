import { render, screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { Screen } from './Screen';

describe(Screen, () => {
  it('should render', () => {
    render(<Screen background="" label="Label" />);

    expect(screen.getByRole('main', { name: /label/i })).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <Screen background="" label="Label">
        CHILDREN
      </Screen>
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('should call click handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Screen background="" label="Label" onClick={handler} />);

    await user.click(screen.getByRole('main', { name: /label/i }));

    expect(handler).toHaveBeenCalled();
  });
});
