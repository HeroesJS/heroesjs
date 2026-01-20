import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Button, ButtonAssets } from './Button';

describe(Button, () => {
  const assets: ButtonAssets = {
    active: 'active.png',
    pressed: 'pressed.png',
  };

  it('should render', () => {
    renderWithProviders(<Button assets={assets} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render label', () => {
    renderWithProviders(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toBeInTheDocument();
  });

  it('should render as active', () => {
    renderWithProviders(<Button assets={assets} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'active.png');
  });

  it('should render as pressed when pressed', () => {
    renderWithProviders(<Button assets={assets} />);

    fireEvent.mouseOver(screen.getByRole('img'));
    fireEvent.mouseDown(screen.getByRole('img'));

    expect(screen.getByRole('img')).toHaveAttribute('src', 'pressed.png');
  });

  it('should render as active when pressed and mouse leaves', () => {
    renderWithProviders(<Button assets={assets} />);

    fireEvent.mouseDown(screen.getByRole('button'));
    fireEvent.mouseLeave(screen.getByRole('button'));

    expect(screen.getByRole('img')).toHaveAttribute('src', 'active.png');
  });

  it('should call click handler when clicked', () => {
    const handler = vitest.fn();

    renderWithProviders(<Button assets={assets} onClick={handler} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handler).toHaveBeenCalled();
  });

  it('should be disabled when disabled', () => {
    renderWithProviders(<Button assets={assets} disabled />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render as pressed when disabled', () => {
    renderWithProviders(<Button assets={assets} disabled />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'pressed.png');
  });
});
