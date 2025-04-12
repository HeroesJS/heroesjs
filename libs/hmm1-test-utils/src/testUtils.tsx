import {render, type RenderResult} from '@testing-library/react';
import {userEvent, type UserEvent} from '@testing-library/user-event';
import type {PropsWithChildren, ReactNode} from 'react';
import {MemoryRouter} from 'react-router-dom';

const ProvidersWrapper = (props: PropsWithChildren) => <MemoryRouter {...props} />;

interface CustomUserEvent {
  rightDown(element: Element): Promise<void>;
  rightUp(): Promise<void>;
}

interface RenderWithProvidersResult extends RenderResult {
  readonly user: UserEvent & CustomUserEvent;
}

export const renderWithProviders = (ui: ReactNode): RenderWithProvidersResult => {
  const renderResult = render(ui, {
    wrapper: ProvidersWrapper,
  });

  const user = userEvent.setup();

  return {
    ...renderResult,
    user: {
      ...user,
      rightDown(element: Element) {
        return this.pointer({keys: '[MouseRight>]', target: element});
      },
      rightUp() {
        return this.pointer({keys: '[/MouseRight]'});
      },
    },
  };
};
