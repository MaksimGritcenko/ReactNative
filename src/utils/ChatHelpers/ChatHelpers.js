import { USER_CHAT_ID } from "../Constants";

export const createChatMessage = (userChatId, text) => {
    const date = new Date();

    return {
        _id: date.getTime(),
        text,
        createdAt: date,
        user: {
          _id: userChatId,
          name: userChatId === USER_CHAT_ID ? 'user' : 'bot',
          avatar: null
        },
    }
}
