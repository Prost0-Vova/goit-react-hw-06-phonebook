import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
