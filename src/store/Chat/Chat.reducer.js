import {
    PUSH_CHAT_MESSAGE,
    CLEAR_CHAT,
    DELETE_MESSAGE,
    UPDATE_IS_SEARCHING,
} from "./Chat.action";

export const updateFormulations = (state, action) => {
    return {
        ...state,
        formulations
    };
}

export const clearChat = (state) => {
    return {
        ...state,
        chatMessages: []
    }
}

export const deleteMessage = (state, action) => {
    const { chatMessages: prevChatMessages } = state;
    const { messageId } = action;

    const chatMessages = prevChatMessages.filter(({ _id }) => _id !== messageId);

    return {
        ...state,
        chatMessages
    }
}

export const pushMessage = (state, action) => {
    const { chatMessages: prevChatMessages } = state;
    const { message } = action;

    const chatMessages = prevChatMessages.length
        ? [ message, ...prevChatMessages ]
        : [ message ];

    return {
        ...state,
        chatMessages
    }
}

export const getInitialState = () => ({
    chatMessages: [],
    isSearching: false
});

export const ChatReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case PUSH_CHAT_MESSAGE:
            return pushMessage(state, action);

        case CLEAR_CHAT:
            return clearChat();

        case DELETE_MESSAGE:
            return deleteMessage(state, action);

        case UPDATE_IS_SEARCHING:
            const { isSearching } = action;

            return {
                ...state,
                isSearching
            }

        default:
            return state;
    }
}

export default ChatReducer;