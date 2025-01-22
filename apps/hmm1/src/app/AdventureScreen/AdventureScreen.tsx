import { AdventureButtons } from '@heroesjs/hmm1-adventure-ui';

import { AdventureWindow } from '../AdventureWindow';

export const AdventureScreen = () => <AdventureWindow renderActionButtons={() => <AdventureButtons />} />;
