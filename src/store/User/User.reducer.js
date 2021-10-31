import {
    LOGIN_SCREEN_VISIBILITY,
    SET_USER_EMAIL
} from "./User.action";

export const getInitialState = () => ({
    isLoginScreen: true,
    email: null
});

export const UserReducer = (
    state = getInitialState(),
    action
    ) => {
    switch (action.type) {
        case LOGIN_SCREEN_VISIBILITY:
            const { status } = action;

            return {
                ...action,
                isLoginScreen: status
            }

        case SET_USER_EMAIL:
            const { email } = action;

            return {
                ...state,
                email
            }
        default:
            return state;
    }
}

export default UserReducer;