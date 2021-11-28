import {
    SET_EXPO_TOKENS
} from "./PushNotifications.action";

export const getInitialState = () => ({
    tokens: []
});

export const PushNotifications = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case SET_EXPO_TOKENS:
            const { tokens } = action;

            return {
                ...state,
                tokens
            };

        default:
            return state;
    }
}

export default PushNotifications;