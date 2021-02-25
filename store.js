import persistPlugin from '@rematch/persist';
import {init} from '@rematch/core';
import {compose} from 'redux';
import getPosts from './models/posts';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const store = init({
  plugins: [persistPlugin(persistConfig)],
  models: {getPosts},
  redux: {
    devtoolOptions: compose(
      window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    ),
  },
});

export default store;
