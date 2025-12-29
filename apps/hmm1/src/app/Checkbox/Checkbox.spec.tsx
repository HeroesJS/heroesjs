import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { Checkbox, CheckboxAssets } from './Checkbox';

describe(Checkbox, () => {
  const assets: CheckboxAssets = {
    checked: 'checked.png',
    unchecked: 'unchecked.png',
  };

  it('should render', () => {
    renderWithProviders(<Checkbox assets={assets} label="Label" />);

    expect(screen.getByRole('checkbox', { name: /label/i })).toBeInTheDocument();
  });

  it('should be unchecked', () => {
    renderWithProviders(<Checkbox assets={assets} label="Label" />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render as unchecked', () => {
    renderWithProviders(<Checkbox assets={assets} label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'unchecked.png');
  });

  it('should call change handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Checkbox assets={assets} label="Label" onChange={handler} />);

    await user.click(screen.getByRole('img'));

    expect(handler).toHaveBeenCalledWith<[boolean]>(true);
  });

  it('should be checked when checked', () => {
    renderWithProviders(<Checkbox assets={assets} checked label="Label" />);

    expect(screen.getByRole('checkbox', { name: /label/i })).toBeChecked();
  });

  it('should render as checked when checked', () => {
    renderWithProviders(<Checkbox assets={assets} checked label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'checked.png');
  });
});
