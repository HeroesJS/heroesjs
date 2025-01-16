import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { menuItemStyle } from './Menu';

export const MenuSeparator = (props: PropsWithChildren) => <Root {...props} />;

const Root = styled.div`
  ${menuItemStyle}
`;
