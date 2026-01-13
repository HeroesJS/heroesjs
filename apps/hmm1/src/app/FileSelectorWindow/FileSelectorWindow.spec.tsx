import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { FileSelectorItem, FileSelectorWindow } from './FileSelectorWindow';
import { MapDifficulty, MapSize } from '../map';

describe(FileSelectorWindow, () => {
  const items: readonly FileSelectorItem[] = [
    {
      label: 'Item',
      value: 'item',
    },
  ];

  it('should render', () => {
    renderWithProviders(<FileSelectorWindow />);

    expect(screen.getByText(/file to load:/i)).toBeInTheDocument();
  });

  it('should render items', () => {
    renderWithProviders(<FileSelectorWindow items={items} />);

    expect(screen.getByRole('listbox', { name: /items/i })).toBeInTheDocument();

    expect(screen.getByRole('option', { name: /item/i })).toBeInTheDocument();
  });

  it('should call item select handler when item is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<FileSelectorWindow items={items} onItemSelect={handler} />);

    await user.click(screen.getByRole('option', { name: /item/i }));

    expect(handler).toHaveBeenCalledWith<[string]>('item');
  });

  it('should render selected item as selected', () => {
    renderWithProviders(<FileSelectorWindow items={items} value="item" />);

    expect(screen.getByRole('option', { name: /item/i, selected: true })).toBeInTheDocument();
  });

  it('should render selected item', () => {
    renderWithProviders(<FileSelectorWindow items={items} value="item" />);

    expect(screen.getByRole('textbox', { name: /selected item/i })).toHaveTextContent(/item/i);
  });

  describe('scenario detail', () => {
    it('should not render by default', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.queryByRole('note', { name: /scenario detail/i })).not.toBeInTheDocument();
    });

    it('should render when enabled', () => {
      renderWithProviders(<FileSelectorWindow showScenarioDetail />);

      const detail = screen.getByRole('note', { name: /scenario detail/i });

      expect(detail).toBeInTheDocument();

      expect(within(detail).getByLabelText(/size:/i)).toBeInTheDocument();
      expect(within(detail).getByLabelText(/difficulty:/i)).toBeInTheDocument();
      expect(within(detail).getByLabelText(/description:/i)).toBeInTheDocument();
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

      const detail = screen.getByRole('note', { name: /scenario detail/i });

      expect(within(detail).getByLabelText(/size:/i)).toHaveTextContent('Medium');
      expect(within(detail).getByLabelText(/difficulty:/i)).toHaveTextContent('Normal');
      expect(within(detail).getByLabelText(/description:/i)).toHaveTextContent('Description');
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should be disabled by default', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeDisabled();
    });

    it('should be enabled when item is selected', () => {
      renderWithProviders(<FileSelectorWindow items={items} value="item" />);

      expect(screen.getByRole('button', { name: /okay/i })).not.toBeDisabled();
    });

    it('should call okay handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<FileSelectorWindow items={items} onOkayClick={handler} value="item" />);

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<FileSelectorWindow />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<FileSelectorWindow onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
