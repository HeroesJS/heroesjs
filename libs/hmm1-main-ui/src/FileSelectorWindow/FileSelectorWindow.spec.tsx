import { screen, within } from '@testing-library/react';

import { MapDifficulty, MapSize } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { FileSelectorItem, FileSelectorWindow } from './FileSelectorWindow';

describe(FileSelectorWindow, () => {
  const items: readonly FileSelectorItem[] = [
    {
      label: 'Item',
      value: 'item',
    },
  ];

  it('should render', () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByRole('region', { name: /^file selector window$/i })).toBeInTheDocument();
  });

  it('should render heading', () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByText(/^file to load:$/i)).toBeInTheDocument();
  });

  it('should render list', () => {
    renderWithProviders(<FileSelectorWindow items={items} />);

    expect(screen.getByRole('listbox', { name: /^items$/i })).toBeInTheDocument();
  });

  it('should render items', () => {
    renderWithProviders(<FileSelectorWindow items={items} />);

    expect(screen.getByRole('option', { name: /^item$/i })).toBeInTheDocument();
  });

  it('should select item when item is clicked', async () => {
    const { user } = renderWithProviders(<FileSelectorWindow items={items} />);

    await user.click(screen.getByRole('option', { name: /^item$/i }));

    expect(screen.getByRole('option', { name: /^item$/i, selected: true })).toBeInTheDocument();
  });

  it('should render selected item name', async () => {
    const { user } = renderWithProviders(<FileSelectorWindow items={items} />);

    await user.click(screen.getByRole('option', { name: /^item$/i }));

    expect(screen.getByRole('textbox', { name: /^selected item$/i })).toHaveTextContent(/^item$/i);
  });

  it('should render initially selected item', () => {
    renderWithProviders(<FileSelectorWindow initialValue="item" items={items} />);

    expect(screen.getByRole('option', { name: /^item$/i, selected: true })).toBeInTheDocument();

    expect(screen.getByRole('textbox', { name: /^selected item$/i })).toHaveTextContent(/^item$/i);
  });

  it('should clear selection when list is clicked', async () => {
    const { user } = renderWithProviders(<FileSelectorWindow initialValue="item" items={items} />);

    await user.click(screen.getByRole('listbox', { name: /^items$/i }));

    expect(screen.queryByRole('option', { name: /^item$/i, selected: true })).toBeNull();
  });

  it('should confirm selection when selected item is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(
      <FileSelectorWindow initialValue="item" items={items} onOkayClick={handler} />
    );

    await user.click(screen.getByRole('option', { name: /^item$/i, selected: true }));

    expect(handler).toHaveBeenCalled();
  });

  describe('scenario detail', () => {
    it('should not render by default', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.queryByRole('note', { name: /^scenario detail$/i })).not.toBeInTheDocument();
    });

    it('should render when enabled', () => {
      renderWithProviders(<FileSelectorWindow showScenarioDetail />);

      const detail = screen.getByRole('note', { name: /^scenario detail$/i });

      expect(detail).toBeInTheDocument();

      expect(within(detail).getByLabelText(/^size:$/i)).toBeInTheDocument();
      expect(within(detail).getByLabelText(/^difficulty:$/i)).toBeInTheDocument();
      expect(within(detail).getByLabelText(/^description:$/i)).toBeInTheDocument();
    });

    it('should render scenario info', () => {
      renderWithProviders(
        <FileSelectorWindow
          scenarioDetail={{
            description: 'Description',
            difficulty: MapDifficulty.Normal,
            size: MapSize.Medium,
          }}
          showScenarioDetail
        />
      );

      const detail = screen.getByRole('note', { name: /^scenario detail$/i });

      expect(within(detail).getByLabelText(/^size:$/i)).toHaveTextContent(/medium/i);
      expect(within(detail).getByLabelText(/^difficulty:$/i)).toHaveTextContent(/^normal$/i);
      expect(within(detail).getByLabelText(/^description:$/i)).toHaveTextContent(/^description$/i);
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /^okay$/i })).toBeInTheDocument();
    });

    it('should be disabled by default', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /^okay$/i })).toBeDisabled();
    });

    it('should be enabled when item is selected', () => {
      renderWithProviders(<FileSelectorWindow initialValue="item" items={items} />);

      expect(screen.getByRole('button', { name: /^okay$/i })).not.toBeDisabled();
    });

    it('should call okay handler with selected item when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(
        <FileSelectorWindow initialValue="item" items={items} onOkayClick={handler} />
      );

      await user.click(screen.getByRole('button', { name: /^okay$/i }));

      expect(handler).toHaveBeenCalledWith<[string]>('item');
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /^cancel$/i })).toBeInTheDocument();
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<FileSelectorWindow onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /^cancel$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
