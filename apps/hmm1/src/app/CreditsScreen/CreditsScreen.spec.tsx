import { screen, render, fireEvent } from '@testing-library/react';

import { CreditsScreen } from './CreditsScreen';

describe(CreditsScreen, () => {
  it('renders heading', async () => {
    render(<CreditsScreen />);

    expect(screen.getByRole('heading', { name: /credits/i })).toBeDefined();
  });

  it('calls handler when clicked', async () => {
    const handleClick = vitest.fn();

    const { container } = render(<CreditsScreen onClick={handleClick} />);

    fireEvent.click(container.children[0]);

    expect(handleClick).toHaveBeenCalled();
  });
});
