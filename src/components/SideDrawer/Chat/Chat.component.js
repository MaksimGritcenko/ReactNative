import React, { useState } from "react";
import { Platform, View } from "react-native";
import { GiftedChat, Day } from "react-native-gifted-chat";
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

    function renderDay(props) {
        return <Day {...props} textStyle={{color: 'black', fontWeight: "bold", fontSize: 14}}/>;
    }

	return (
        <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? '2%' : '10%' }}>
         <GiftedChat
            messages={chatMessages}
            onLongPress={ onLongPress }
            text={chatVal}
            isTyping={isBotTyping}
            onInputTextChanged={ setChatVal }
            onSend={ onSend }
            renderDay={renderDay}
            listViewProps={{
                keyboardShouldPersistTaps: 'never',
                style:{height: '10%'}
            }}
            user={{
                _id: 1,
            }}
        />
        </View>
	);
};

export default ChatComponent;
