import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testUtils';

import { CreditsScreen } from './CreditsScreen';

describe(CreditsScreen, () => {
  it('renders heading', async () => {
    renderWithProviders(<CreditsScreen />);

    expect(screen.getByRole('heading', { name: /credits/i })).toBeDefined();
  });

  it('calls handler when clicked', async () => {
    const handleClick = vitest.fn();

    const { container, user } = renderWithProviders(<CreditsScreen onClick={handleClick} />);

    await user.click(container.firstChild as Element);

    expect(handleClick).toHaveBeenCalled();
  });
});
