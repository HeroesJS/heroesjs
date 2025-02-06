import { useTranslation } from 'react-i18next';

import { Button, type ButtonAssets } from '../Button';
import type { PositionProps } from '../PositionedComponent';

import * as assets from './assets';

type SystemButtonType = 'yes' | 'no' | 'okay' | 'cancel';

const assetMap: Record<SystemButtonType, ButtonAssets> = {
  cancel: assets.cancelButton,
  no: assets.noButton,
  okay: assets.okayButton,
  yes: assets.yesButton,
};

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly type: SystemButtonType;
}

export const SystemButton = ({ type, ...rest }: Props) => {
  const { t } = useTranslation('core', { keyPrefix: 'component.systemButton' });

  return <Button {...rest} assets={assetMap[type]} label={t(type)} />;
};
