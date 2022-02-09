import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import algoliasearch from 'algoliasearch/lite';

import { USER_CHAT_ID, BOT_CHAT_ID } from "../../../utils/Constants";
import { createChatMessage } from '../../../utils/ChatHelpers';

const searchClient = algoliasearch(
    'B9DIM6R7DB',
    'eb925579bcd9ea5c216cd8aec6a6a99e'
);

const index = searchClient.initIndex('questions');

export const ChatComponent = (props) => {
	const {
        chatMessages,
        language,
        pushChatMessage,
        onLongPress
    } = props;

	const [isBotTyping, setIsBotTyping] = useState(false);
	const [chatVal, setChatVal] = useState('');

    const onSend = () => {
        setIsBotTyping(true);
        pushChatMessage(createChatMessage(USER_CHAT_ID, chatVal));

        index.search(chatVal)
            .then(({ hits }) => {
                setTimeout(() => {
                    const answer = hits[0] ? hits[0].answer : null;
                    const answerValue = (answer && answer[language]) || 'hello!';

                    pushChatMessage(createChatMessage(BOT_CHAT_ID, answerValue));
                    setIsBotTyping(false);
                }, 2000);
            }
        );
    };

	return (
        <GiftedChat
            messages={chatMessages}
            onLongPress={ onLongPress }
            text={chatVal}
            isTyping={isBotTyping}
            onInputTextChanged={ setChatVal }
            onSend={ onSend }
            user={{
                _id: 1,
            }}
        />
	);
};

export default ChatComponent;
