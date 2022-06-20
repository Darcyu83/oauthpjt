import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {todosReducer} from './todosReducer';
import {authReducer} from './auth';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer,
});

export const persistReducerWRoot = persistReducer(persistConfig, rootReducer);
