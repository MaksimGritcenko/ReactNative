import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import {
    getChatQuestionsForChain,
    queryFormulation,
} from '../../../store/Chat/Chat.dispatcher';
import {
    updateAnswers,
    updateActiveQuestionId
} from '../../../store/Chat/Chat.action';
import ChatComponent from './Chat.component';

import { getNextActiveQstId } from '../../../utils/ChatHelpers';

export const mapStateToProps = (state) => ({
    activeQuestionId: state.ChatReducer.activeQuestionId,
    activeChatChain: state.ChatReducer.activeChatChain,
    formulations: state.ChatReducer.formulations,
    answers: state.ChatReducer.answers,
});

export const mapDispatchToProps = (dispatch) => ({
    getChatQuestionsForChain: (activeQstId) => getChatQuestionsForChain(dispatch, activeQstId),
    queryFormulation: (questionId) => queryFormulation(questionId, dispatch),
    updateAnswers: (answer) => dispatch(updateAnswers(answer)),
    updateActiveQuestionId: (activeQuestionId) => dispatch(updateActiveQuestionId(activeQuestionId)),
});

export const ChatComponentContainer = (props) => {
    const {
        getChatQuestionsForChain,
        queryFormulation,
        updateAnswers,
        activeQuestionId,
        activeChatChain,
        updateActiveQuestionId
    } = props;

    const [chatMsgBottomOffset, setChatMsgBottomOffset] = useState(0);
    const [chatMsgHeight, setChatMsgHeight] = useState(0);
    const [inputTxt, setInputTxt] = useState('');

    useEffect(async () => {
        await getChatQuestionsForChain(activeQuestionId);
        queryFormulation(activeQuestionId);
    }, []);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyBoardChange.bind(this, true));
        Keyboard.addListener('keyboardDidHide', onKeyBoardChange.bind(this, false));

        return () => {
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
        }
    });

    function onKeyBoardChange(isOpened, e) {
        if (!isOpened) {
            setChatMsgBottomOffset(0);
        } else {
            const offset = e.endCoordinates.height + chatMsgHeight;
            setChatMsgBottomOffset(offset);
        }
    }

    function onAnswerClick(answer) {
        const nextId = getNextActiveQstId(activeQuestionId, activeChatChain);

        updateAnswers(answer);
        updateActiveQuestionId(nextId);

        if (nextId) {
            queryFormulation(nextId);
        }
    }

    function onInputSend() {
        const nextId = getNextActiveQstId(activeQuestionId, activeChatChain);

        if (!inputTxt) {
            return;
        }

        updateAnswers(inputTxt);
        updateActiveQuestionId(nextId);

        if (nextId) {
            queryFormulation(nextId);
        }
    }

    function onInputChange(txt) {
        setInputTxt(txt);
    }

    function containerProps() {
        return {
            ...props,
            chatMsgBottomOffset,
        };
    }

    const containerFunctions = {
        onAnswerClick,
        onInputChange,
        onInputSend,
        setChatMsgHeight
    }

    return (
        <ChatComponent
          { ...containerProps() }
          { ...containerFunctions }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponentContainer);