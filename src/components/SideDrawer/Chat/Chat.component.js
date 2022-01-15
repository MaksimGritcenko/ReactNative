import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { InstantSearch } from "react-instantsearch-native";
import { connectSearchBox } from "react-instantsearch-native";
import { connectInfiniteHits } from "react-instantsearch-native";

import { getConditionalSearchQuery } from "../../../utils/Search";
import { createChatMessage } from '../../../utils/ChatHelpers';

const SearchBox = connectSearchBox(() => null);

const HitsReciever = connectInfiniteHits((props) => {
	const { hits, answer, setAnswer } = props;

    if (hits[0]) {
        setAnswer(hits[0].answer);
    } else {
        if (Object.keys(answer).length) {
            setAnswer({});
        }
    }

	return null;
});

export const ChatComponent = (props) => {
	const { chatMessages, language, pushChatMessage } = props;

	const [isBotTyping, setIsBotTyping] = useState(false);
	const [chatVal, setChatVal] = useState('');
	const [answer, setAnswer] = useState({});

    const onSend = () => {
        setIsBotTyping(true);
        pushChatMessage(createChatMessage(1, chatVal));

        setTimeout(() => {
            const answerValue = answer[language] || 'hello!';

            pushChatMessage(createChatMessage(2, answerValue));
            setIsBotTyping(false);
        }, 2000);
    };

	return (
		<>
			<InstantSearch
				indexName="questions"
				searchClient={getConditionalSearchQuery()}
				searchState={{ query: chatVal }}
			>
				<SearchBox />
				<HitsReciever setAnswer={ setAnswer } answer={ answer }/>
				<GiftedChat
					messages={chatMessages}
					text={chatVal}
                    isTyping={isBotTyping}
					onInputTextChanged={setChatVal}
                    onSend={ onSend }
					user={{
						_id: 1,
					}}
				/>
			</InstantSearch>
		</>
	);
};

export default ChatComponent;
