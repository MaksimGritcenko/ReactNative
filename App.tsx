import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// @ts-ignore
import store, { persistor } from 'store';
import Router from './src/components/Router';

export default function App() {
  function renderRouter() {
    return <Router />;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={ persistor }>
        { renderRouter }
      </PersistGate>
    </Provider>
  );
}
