import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameScreen } from './NewStandardGameScreen';

describe(NewStandardGameScreen, () => {
  it('should render screen', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('main', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render window', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should select normal game difficulty by default', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('radio', { name: /normal/i })).toBeChecked();
  });

  it('should set average computer opponents by default', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(
      within(screen.getByRole('radiogroup', { name: /opponent 1 setting/i })).getByRole('radio', { name: /average/i })
    ).toBeChecked();
    expect(
      within(screen.getByRole('radiogroup', { name: /opponent 2 setting/i })).getByRole('radio', { name: /average/i })
    ).toBeChecked();
    expect(
      within(screen.getByRole('radiogroup', { name: /opponent 3 setting/i })).getByRole('radio', { name: /average/i })
    ).toBeChecked();
  });

  it('should select blue player color by default', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(
      within(screen.getByRole('radiogroup', { name: /player color/i })).getByRole('radio', { name: /blue/i })
    ).toBeChecked();
  });

  it('should not select king of the hill by default', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('checkbox', { name: /king of the hill/i })).not.toBeChecked();
  });

  it('should call cancel handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<NewStandardGameScreen onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
