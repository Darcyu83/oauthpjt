/**
 * @format
 */

import {configureStore} from '@reduxjs/toolkit';
import {AppRegistry} from 'react-native';
import {createStore} from 'redux';
import App from './App';
import {name as appName} from './app.json';
import {rootReducer} from './src/redux/reducers';
import logger from 'redux-logger';

const preloadedState = {
  todos: [
    {
      text: 'Eat food',
      completed: true,
    },
    {
      text: 'Exercise',
      completed: false,
    },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
};

const store = configureStore({
  rootReducer,
  middleware: [logger],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

AppRegistry.registerComponent(appName, () => App);
