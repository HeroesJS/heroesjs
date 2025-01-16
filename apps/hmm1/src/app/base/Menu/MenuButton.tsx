import type { ComponentProps } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';

import { menuItemStyle } from './Menu';

type Props = ComponentProps<typeof Button>;

export const MenuButton = (props: Props) => <MenuButtonRoot {...props} />;

const MenuButtonRoot = styled(Button)`
  ${menuItemStyle}
`;
