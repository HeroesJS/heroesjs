import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { CycleToggle } from './CycleToggle';

describe(CycleToggle, () => {
  it('should render', async () => {
    renderWithProviders(<CycleToggle children={(v) => v} options={['A', 'B']} value="A" />);

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should render label', () => {
    renderWithProviders(<CycleToggle children={(v) => v} label="Label" options={['A', 'B']} value="A" />);

    expect(screen.getByRole('radiogroup', { name: /label/i })).toBeInTheDocument();
  });

  it('should render value', () => {
    renderWithProviders(<CycleToggle children={(v) => v} options={['A', 'B']} value="A" />);

    expect(screen.getByRole('radio', { name: /a/i })).toBeChecked();
  });

  it('should call change handler with next option when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <CycleToggle children={(v) => v} onChange={handler} options={['A', 'B', 'C']} value="A" />
    );

    await user.click(screen.getByRole('radiogroup'));

    expect(handler).toHaveBeenCalledWith<[string]>('B');
  });

  it('should call change handler with first option when clicked and last option is selected', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <CycleToggle children={(v) => v} onChange={handler} options={['A', 'B', 'C']} value="C" />
    );

    await user.click(screen.getByRole('radiogroup'));

    expect(handler).toHaveBeenCalledWith<[string]>('A');
  });

  describe('reverse', () => {
    it('should call change handler with previous option when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <CycleToggle children={(v) => v} onChange={handler} options={['A', 'B', 'C']} reverse value="C" />
      );

      await user.click(screen.getByRole('radiogroup'));

      expect(handler).toHaveBeenCalledWith<[string]>('B');
    });

    it('should call change handler with last option when clicked and first option is selected', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <CycleToggle children={(v) => v} onChange={handler} options={['A', 'B', 'C']} reverse value="A" />
      );

      await user.click(screen.getByRole('radiogroup'));

      expect(handler).toHaveBeenCalledWith<[string]>('C');
    });
  });
});
