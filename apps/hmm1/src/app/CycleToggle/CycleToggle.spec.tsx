import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { CycleToggle } from './CycleToggle';

describe(CycleToggle, () => {
  it('should render', async () => {
    renderWithProviders(<CycleToggle children={(v) => v} label="Label" options={['A', 'B']} value="A" />);

    expect(screen.getByRole('radiogroup', { name: /label/i })).toBeInTheDocument();
  });

  it('should render value', () => {
    renderWithProviders(<CycleToggle children={(v) => v} label="Label" options={['A', 'B']} value="A" />);

    expect(screen.getByRole('radio', { name: /a/i })).toBeChecked();
  });

  it('should call change handler with next option when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <CycleToggle children={(v) => v} label="Label" onChange={handler} options={['A', 'B']} value="A" />
    );

    await user.click(screen.getByRole('radiogroup', { name: /label/i }));

    expect(handler).toHaveBeenCalledWith<[string]>('B');
  });

  it('should call change handler with first option when clicked and last option is selected', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <CycleToggle children={(v) => v} label="Label" onChange={handler} options={['A', 'B']} value="B" />
    );

    await user.click(screen.getByRole('radiogroup', { name: /label/i }));

    expect(handler).toHaveBeenCalledWith<[string]>('A');
  });
});
