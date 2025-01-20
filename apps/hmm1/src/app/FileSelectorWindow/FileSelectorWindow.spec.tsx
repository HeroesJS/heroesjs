import { screen, within } from '@testing-library/react';

import { ScenarioDifficulty, ScenarioSize } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { FileSelectorWindow } from './FileSelectorWindow';

describe(FileSelectorWindow, () => {
  it('renders window', async () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('dialog', { name: /file selector window/i })).toBeInTheDocument();
  });

  it('renders heading', async () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('heading', { name: /file to load/i })).toBeInTheDocument();
  });

  it('renders items', async () => {
    renderWithProviders(<FileSelectorWindow items={['Item A', 'Item B']} />);

    expect(screen.getByRole('listbox', { name: /items/i })).toBeInTheDocument();

    expect(screen.getByRole('option', { name: /item a/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /item b/i })).toBeInTheDocument();
  });

  it('calls handler when item is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<FileSelectorWindow items={['Item A']} onItemClick={handler} />);

    await user.click(screen.getByRole('option', { name: /item a/i }));

    expect(handler).toHaveBeenCalledWith('Item A');
  });

  it('renders selected item as selected', async () => {
    renderWithProviders(<FileSelectorWindow items={['Item A']} selectedItem="Item A" />);

    expect(screen.getByRole('option', { name: /item a/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('renders name input', () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
  });

  it('renders selected item in name input', async () => {
    renderWithProviders(<FileSelectorWindow items={['Item A']} selectedItem="Item A" />);

    expect(screen.getByRole('textbox', { name: /name/i })).toHaveTextContent('Item A');
  });

  it('renders confirm button', async () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('renders confirm button as disabled when no item selected', async () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeDisabled();
  });

  it('renders confirm button as enabled when item selected', async () => {
    renderWithProviders(<FileSelectorWindow items={['Item A']} selectedItem="Item A" />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeEnabled();
  });

  it('calls handler when confirm button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <FileSelectorWindow items={['Item A']} onConfirmClick={handler} selectedItem="Item A" />,
    );

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders cancel button', async () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<FileSelectorWindow onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });

  describe('scenario info', () => {
    it("doesn't render by default", async () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.queryByRole('note', { name: /scenario info/i })).not.toBeInTheDocument();
    });

    it('renders when set', async () => {
      renderWithProviders(<FileSelectorWindow showScenarioInfo />);

      const info = screen.getByRole('note', { name: /scenario info/i });

      expect(within(info).getByLabelText(/size/i)).toBeInTheDocument();
      expect(within(info).getByLabelText(/size/i)).toHaveTextContent('');

      expect(within(info).getByLabelText(/difficulty/i)).toBeInTheDocument();
      expect(within(info).getByLabelText(/difficulty/i)).toHaveTextContent('');

      expect(within(info).getByLabelText(/description/i)).toBeInTheDocument();
      expect(within(info).getByLabelText(/description/i)).toHaveTextContent('');
    });

    it('renders info', async () => {
      renderWithProviders(
        <FileSelectorWindow
          scenarioInfo={{
            description: 'Description',
            difficulty: ScenarioDifficulty.Impossible,
            size: ScenarioSize.Large,
          }}
          showScenarioInfo
        />,
      );

      const info = screen.getByRole('note', { name: /scenario info/i });

      expect(within(info).getByLabelText(/size/i)).toHaveTextContent(/large/i);
      expect(within(info).getByLabelText(/difficulty/i)).toHaveTextContent(/impossible/i);
      expect(within(info).getByLabelText(/description/i)).toHaveTextContent(/description/i);
    });
  });
});
