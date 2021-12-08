import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import {
    getChatQuestionsForChain,
    queryFormulation,
    sendChatResult
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
    isFormulationLoading: state.ChatReducer.isFormulationLoading,
    activeChainAdminId: state.ChatReducer.activeChainAdminId,
    activeChatTabId: state.ChatReducer.activeChatTabId,
    customerEmail: state.UserReducer.email,
});

export const mapDispatchToProps = (dispatch) => ({
    getChatQuestionsForChain: (activeQstId, activeChatTabId) => getChatQuestionsForChain(dispatch, activeQstId, activeChatTabId),
    queryFormulation: (questionId, formulations) => queryFormulation(questionId, formulations, dispatch),
    updateAnswers: (answer) => dispatch(updateAnswers(answer)),
    updateActiveQuestionId: (activeQuestionId) => dispatch(updateActiveQuestionId(activeQuestionId)),
    sendChatResult: (
        formulations,
        answers,
        adminId,
        customerEmail,
        tabId
    ) => sendChatResult(formulations, answers, adminId, customerEmail, tabId, dispatch),
});

export const ChatComponentContainer = (props) => {
    const {
        getChatQuestionsForChain,
        queryFormulation,
        updateAnswers,
        activeQuestionId,
        activeChatChain,
        updateActiveQuestionId,
        sendChatResult,
        answers,
        activeChainAdminId,
        formulations,
        customerEmail,
        activeChatTabId
    } = props;

    const [chatMsgBottomOffset, setChatMsgBottomOffset] = useState(0);
    const [chatMsgHeight, setChatMsgHeight] = useState(0);
    const [inputTxt, setInputTxt] = useState('');
    const [prevActiveQstId, setPrevActiveQstId] = useState('');

    useEffect(async () => {
        await getChatQuestionsForChain(activeQuestionId, activeChatTabId);
        queryFirstFormul();
    }, []);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyBoardChange.bind(this, true));
        Keyboard.addListener('keyboardDidHide', onKeyBoardChange.bind(this, false));

        queryFirstFormul();

        return () => {
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
        }
    });

    function queryFirstFormul() {
        if (!prevActiveQstId) {
            queryFormulation(activeQuestionId, formulations);
            setPrevActiveQstId(activeQuestionId);
        }
    }

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
            queryFormulation(nextId, formulations);
        } else {
            onLastQuestionResponse(answer);
        }
    }

    function onInputSend() {
        sendChatResult(
            formulations,
            [ ...answers, 'asdsadsad' ],
            activeChainAdminId,
            customerEmail,
            activeChatTabId
        );

        if (!inputTxt) {
            return;
        }

        onAnswerClick(inputTxt);
        setInputTxt('');
    }

    function onLastQuestionResponse(lastAnswer) {
        // setting answer, as the value doesn't contain the last anwser
        sendChatResult(
            formulations,
            [ ...answers, lastAnswer ],
            activeChainAdminId,
            customerEmail,
            activeChatTabId
        );
    }

    function onInputChange(txt) {
        setInputTxt(txt);
    }

    function containerProps() {
        return {
            ...props,
            chatMsgBottomOffset,
            inputTxt,
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