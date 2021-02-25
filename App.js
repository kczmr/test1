import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {getPersistor} from '@rematch/persist';
import {StatusBar} from 'react-native';
import Navigator from './components/Navigator';
import store from './store';

const persistor = getPersistor();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
