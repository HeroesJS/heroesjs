import { act, screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { TextInput } from './TextInput';

describe(TextInput, () => {
  it('should render', () => {
    renderWithProviders(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with custom label', () => {
    renderWithProviders(<TextInput label="Label" />);

    expect(screen.getByRole('textbox', { name: /label/i })).toBeInTheDocument();
  });

  it('should render empty by default', () => {
    renderWithProviders(<TextInput />);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should receive focus when clicked', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await user.click(screen.getByRole('textbox'));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('should render caret when focused', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await user.click(screen.getByDisplayValue(''));

    expect(screen.getByDisplayValue('@')).toBeInTheDocument();
  });

  it('should allow to enter value', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await user.type(screen.getByRole('textbox'), 'value');

    expect(screen.getByDisplayValue('value@')).toBeInTheDocument();
  });

  it('should allow to enter only 23 characters', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await user.type(screen.getByRole('textbox'), '{x>24}');

    expect(screen.getByDisplayValue(`${'x'.repeat(23)}@`)).toBeInTheDocument();
  });

  it('should call change handler when enter pressed', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<TextInput onChange={handler} />);

    await act(() => user.type(screen.getByRole('textbox'), 'value{Enter}'));

    expect(handler).toHaveBeenCalledWith<[string]>('value');
  });

  it('should cancel edit when escape pressed', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await act(() => user.type(screen.getByRole('textbox'), 'value{Escape}'));

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render value', () => {
    renderWithProviders(<TextInput value="value" />);

    expect(screen.getByDisplayValue('value')).toBeInTheDocument();
  });

  it.fails('should prevent interaction with other elements', async () => {
    const { user } = renderWithProviders(
      <>
        <TextInput />
        <button>Confirm</button>
      </>
    );

    await user.click(screen.getByRole('textbox'));

    await user.click(screen.getByRole('button'));
  });

  it('should prevent changing caret position', async () => {
    const { user } = renderWithProviders(<TextInput />);

    await user.type(screen.getByRole('textbox'), 'a{ArrowLeft}b');

    expect(screen.getByDisplayValue('ab@')).toBeInTheDocument();
  });

  it('should retain focus when tabbing', async () => {
    const { user } = renderWithProviders(
      <>
        <TextInput />
        <button />
      </>
    );

    await user.type(screen.getByRole('textbox'), '{Tab}');

    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('should receive focus by default when auto focus is set', () => {
    renderWithProviders(<TextInput autoFocus />);

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});
