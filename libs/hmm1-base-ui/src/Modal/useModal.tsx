import { upperFirst } from 'lodash';

import { useToggle2 } from '../useToggle';

interface Props {
  readonly close: () => void;
  readonly isOpen: boolean;
  readonly open: () => void;
}

type UseModalResult<Name extends string> = {
  readonly [Prop in keyof Props as Prop extends 'isOpen' ? `${Name}IsOpen` : `${Prop}${Capitalize<Name>}`]: Props[Prop];
};

export const useModal = <Name extends string>(name: Name, initialValue?: boolean): UseModalResult<Name> => {
  const [isOpen, open, close] = useToggle2(initialValue);

  return {
    [`${name}IsOpen`]: isOpen,
    [`open${upperFirst(name)}`]: () => open(),
    [`close${upperFirst(name)}`]: () => close(),
  } as UseModalResult<Name>;
};
