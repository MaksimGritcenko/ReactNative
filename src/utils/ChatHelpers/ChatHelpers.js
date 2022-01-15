export const createChatMessage = (userChatId, text) => {
    const date = new Date();

    return {
        _id: date.getTime(),
        text,
        createdAt: date,
        user: {
          _id: userChatId,
          name: userChatId === 1 ? 'user' : 'bot',
          avatar: null
        },
    }
}