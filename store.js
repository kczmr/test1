import persistPlugin from '@rematch/persist';
import {init} from '@rematch/core';
import {compose} from 'redux';
import * as models from './models';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const store = init({
  plugins: [persistPlugin(persistConfig)],
  models,
  redux: {
    devtoolOptions: compose(
      window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    ),
  },
});

export default store;
