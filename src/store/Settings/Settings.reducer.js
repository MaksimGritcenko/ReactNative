import {
  UPDATE_LANGUAGE_BOX_VISIBILITY,
  UPDATE_APPLICATION_FONT_SIZE,
} from './Settings.action';

export const getInitialState = () => ({
  isLangBoxVisible: false,
  fontSize: 14,
});

export const UserReducer = (
  state = getInitialState(),
  action
) => {
  switch (action.type) {
    case UPDATE_LANGUAGE_BOX_VISIBILITY:
      const { isLangBoxVisible } = action;

      return {
        ...state,
        isLangBoxVisible
      }

    case UPDATE_APPLICATION_FONT_SIZE:
      const { fontSize } = action;

      return {
        ...state,
        fontSize
      }

    default:
      return state;
  }
}

export default UserReducer;