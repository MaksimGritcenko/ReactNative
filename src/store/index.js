import {
  combineReducers,
  createStore,
} from 'redux';

import AdminReducer from './Admin/Admin.reducer';

const reducers = {
  AdminReducer
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
