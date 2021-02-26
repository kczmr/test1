import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {getPersistor} from '@rematch/persist';
import store from './store';
import Navigator from './components/Navigator';
import ConnectionLost from './components/ConnectionLost';

const persistor = getPersistor();

const App = () => {
  return (
    <>
      <ConnectionLost />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
