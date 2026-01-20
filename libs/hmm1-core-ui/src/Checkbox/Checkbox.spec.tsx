import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Checkbox, type CheckboxAssets } from './Checkbox';

describe(Checkbox, () => {
  const assets: CheckboxAssets = {
    checked: 'checked.jpg',
    unchecked: 'unchecked.jpg',
  };

  it('should render', () => {
    renderWithProviders(<Checkbox assets={assets} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render label', () => {
    renderWithProviders(<Checkbox assets={assets} label="Label" />);

    expect(screen.getByRole('checkbox', { name: /label/i })).toBeInTheDocument();
  });

  it('should be unchecked by default', () => {
    renderWithProviders(<Checkbox assets={assets} />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render as unchecked when unchecked', () => {
    renderWithProviders(<Checkbox assets={assets} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'unchecked.jpg');
  });

  it('should be checked when checked', () => {
    renderWithProviders(<Checkbox assets={assets} checked />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render as checked when checked', () => {
    renderWithProviders(<Checkbox assets={assets} checked />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'checked.jpg');
  });

  it('should call change handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Checkbox assets={assets} onChange={handler} />);

    await user.click(screen.getByRole('checkbox'));

    expect(handler).toHaveBeenCalledWith<[boolean]>(true);
  });
});
