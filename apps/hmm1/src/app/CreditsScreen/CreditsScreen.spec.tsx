import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {CreditsScreen} from './CreditsScreen';

describe(CreditsScreen, () => {
  it('renders heading', async () => {
    renderWithProviders(<CreditsScreen />);

    expect(screen.getByRole('heading', {name: /credits/i})).toBeInTheDocument();
  });

  it('calls handler when clicked', async () => {
    const handleClick = vitest.fn();

    const {container, user} = renderWithProviders(<CreditsScreen onClick={handleClick} />);

    await user.click(container.firstChild as Element);

    expect(handleClick).toHaveBeenCalled();
  });
});
