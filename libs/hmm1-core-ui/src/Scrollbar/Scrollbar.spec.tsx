import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Scrollbar } from './Scrollbar';

describe(Scrollbar, () => {
  it('should call up click handler when up button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Scrollbar height={100} onUpClick={handler} />);

    await user.click(screen.getByRole('button', { name: /^scroll up$/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('should call down click handler when down button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Scrollbar height={100} onDownClick={handler} />);

    await user.click(screen.getByRole('button', { name: /^scroll down$/i }));

    expect(handler).toHaveBeenCalled();
  });
});
