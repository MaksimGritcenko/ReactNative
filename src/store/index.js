import {
  combineReducers,
  createStore,
} from 'redux';

import { persistReducer, persistStore } from 'redux-persist';

import AdminReducer from './Admin/Admin.reducer';
import UserReducer from "./User/User.reducer";
import ChatModalReducer from "./ChatModal/ChatModal.reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['UserReducer']
}

const reducersToPersist = combineReducers({
  AdminReducer,
  ChatModalReducer,
  UserReducer
});

const persistedReducers = persistReducer(persistConfig, reducersToPersist);

export const store = createStore(
  // reducersToPersist,
  persistedReducers,
  ( // enable Redux dev-tools only in development
    process.env.NODE_ENV === 'development'
        && window.__REDUX_DEVTOOLS_EXTENSION__
  ) && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
  }),
);

export const persistor = persistStore(store);



export default store;
