import { } from './Admin.dispatcher';

import {
} from './Admin.action';

export const getInitialState = () => ({
  admin: 'Vasya'
});

export const AdminReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AdminReducer;
