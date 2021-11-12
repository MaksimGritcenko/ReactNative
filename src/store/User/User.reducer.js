import {
    LOGIN_SCREEN_VISIBILITY,
    SET_USER_EMAIL,
    SET_IS_ONBOARDED, SET_PREFERED_LANGUAGE
} from "./User.action";

export const setIsOnboarded = (state, action) => {
    const { isOnboarded } = action;

    return {
        ...state,
        isOnboarded
    };
}

export const getInitialState = () => ({
    isLoginScreen: true,
    email: null,
    isOnboarded: false,
    language: null
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

        case SET_IS_ONBOARDED:
            return setIsOnboarded(state, action);

        case SET_PREFERED_LANGUAGE:
            const { language } = action;

            return {
                ...state,
                language
            }

        default:
            return state;
    }
}

export default UserReducer;