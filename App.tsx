/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {persistReducerWRoot} from './src/redux/reducers';
import TestScrn from './src/scrn/TestScrn';

const store = configureStore({
  reducer: persistReducerWRoot,
  middleware: [logger],
});

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TestScrn />
      </PersistGate>
    </Provider>
  );
};

export default App;
