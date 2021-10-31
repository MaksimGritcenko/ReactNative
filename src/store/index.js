import {
  combineReducers,
  createStore,
} from 'redux';

import AdminReducer from './Admin/Admin.reducer';
import UserReducer from "./User/User.reducer";

const reducers = {
  AdminReducer,
  UserReducer
};

export const store = createStore(
  combineReducers(reducers),
  ( // enable Redux dev-tools only in development
    process.env.NODE_ENV === 'development'
        && window.__REDUX_DEVTOOLS_EXTENSION__
  ) && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
  }),
);

export default store;
