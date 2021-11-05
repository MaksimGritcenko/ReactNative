import { UPDATE_MODAL_VISIBILITY } from "./ChatModal.action";

export const getInitialState = () => ({
    isVisible: false
});

export const ChatModalReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case UPDATE_MODAL_VISIBILITY:
            const { status } = action;

            return {
                ...state,
                isVisible: status
            }
        default:
            return state;
    }
}

export default ChatModalReducer;