import React from "react";
import { connect } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import LV from '../../utils/Translations/lv.json';
import { createChatMessage } from '../../utils/ChatHelpers';
import { pushChatMessage } from '../../store/Chat/Chat.action';

import Highlight from "./Highlights.component";

export const mapStateToProps = (state) => ({
    language: state.UserReducer.language,
});

export const mapDispatchToProps = (dispatch) => ({
    pushChatMessage: (messageObj) => dispatch(pushChatMessage(messageObj))
});

const HighlightContainer = (props) => {
    const { language, query, pushChatMessage } = props;

    const navigation = useNavigation();

    function getLanguage() {
        return language === 'lv';
    }

    function onPress(question, answer) {
        const screenName = getLanguage() ? LV.NavigationChatTitle : 'Chat';

        pushChatMessage(createChatMessage(1, question));
        pushChatMessage(createChatMessage(2, answer));
        navigation.jumpTo(screenName);
    }

	const containerFunctions = {
        onPress
    };

	const containerProps = () => {
		return {
			...props,
		};
	};

	return <Highlight
      { ...containerProps() }
      { ...containerFunctions }
    />;
};

export default connect(mapStateToProps, mapDispatchToProps)(HighlightContainer);
