import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {setupI18n} from '@heroesjs/hmm1-i18n';

import {App} from './app/app';
import {store} from './app/store';

setupI18n();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
