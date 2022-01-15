export const UPDATE_IS_SEARCHING = 'UPDATE_IS_SEARCHING';
export const PUSH_CHAT_MESSAGE = 'PUSH_CHAT_MESSAGE';
export const CLEAR_CHAT = 'CLEAR_CHAT';

export const pushChatMessage = (message) => ({
    type: PUSH_CHAT_MESSAGE,
    message
});

export const clearChat = () => ({
    type: CLEAR_CHAT
});

export const updateIsSearching = (isSearching) => ({
    type: UPDATE_IS_SEARCHING,
    isSearching
});
