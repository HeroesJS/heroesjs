import { fireEvent, render, screen } from '@testing-library/react';

import { Button, ButtonAssets } from './Button';

describe(Button, () => {
  const assets: ButtonAssets = {
    active: 'active.png',
    pressed: 'pressed.png',
  };

  it('should render', () => {
    render(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toBeInTheDocument();
  });

  it('should render as active', () => {
    render(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'active.png');
  });

  it('should render as pressed when pressed', () => {
    render(<Button assets={assets} label="Label" />);

    fireEvent.mouseOver(screen.getByRole('img'));
    fireEvent.mouseDown(screen.getByRole('img'));

    expect(screen.getByRole('img')).toHaveAttribute('src', 'pressed.png');
  });

  it('should render as active when pressed and mouse leaves', () => {
    render(<Button assets={assets} label="Label" />);

    fireEvent.mouseDown(screen.getByRole('button', { name: /label/i }));
    fireEvent.mouseLeave(screen.getByRole('button', { name: /label/i }));

    expect(screen.getByRole('img')).toHaveAttribute('src', 'active.png');
  });

  it('should call click handler when clicked', () => {
    const handler = vitest.fn();

    render(<Button assets={assets} label="Label" onClick={handler} />);

    fireEvent.click(screen.getByRole('button', { name: /label/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('should be disabled when disabled', () => {
    render(<Button assets={assets} disabled label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toBeDisabled();
  });

  it('should render as pressed when disabled', () => {
    render(<Button assets={assets} disabled label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'pressed.png');
  });
});
