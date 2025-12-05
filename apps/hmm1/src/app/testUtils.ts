import { render, type RenderResult } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import type { ReactNode } from 'react';

interface RenderWithProvidersResult extends RenderResult {
  readonly user: UserEvent & {
    mouseRightDown(target: Element): Promise<void>;
    mouseRightUp(): Promise<void>;
  };
}

export function renderWithProviders(ui: ReactNode): RenderWithProvidersResult {
  const user = userEvent.setup();

  return {
    ...render(ui),
    user: {
      ...user,
      mouseRightDown(target: Element) {
        return this.pointer({ keys: '[MouseRight>]', target });
      },
      mouseRightUp() {
        return this.pointer({ keys: '[/MouseRight]' });
      },
    },
  };
}
