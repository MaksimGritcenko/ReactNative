import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { Keyboard, Alert } from 'react-native';

import {
    getChatQuestionsForChain,
    queryFormulation,
    sendChatResult,
    toDefaultChatState
} from '../../../store/Chat/Chat.dispatcher';
import {
    updateAnswers,
    updateActiveQuestionId
} from '../../../store/Chat/Chat.action';
import ChatComponent from './Chat.component';

import { getNextActiveQstId } from '../../../utils/ChatHelpers';
import { useNavigation } from "@react-navigation/native";
import { getIsLV } from '../../../utils/Translations/Translations';
import LV from '../../../utils/Translations/lv.json';

export const mapStateToProps = (state) => ({
    activeQuestionId: state.ChatReducer.activeQuestionId,
    activeChatChain: state.ChatReducer.activeChatChain,
    formulations: state.ChatReducer.formulations,
    answers: state.ChatReducer.answers,
    isFormulationLoading: state.ChatReducer.isFormulationLoading,
    activeChainAdminId: state.ChatReducer.activeChainAdminId,
    activeChatTabId: state.ChatReducer.activeChatTabId,
    customerEmail: state.UserReducer.email,
    language: state.UserReducer.language,
});

export const mapDispatchToProps = (dispatch) => ({
    getChatQuestionsForChain: (activeQstId, activeChatTabId) => getChatQuestionsForChain(dispatch, activeQstId, activeChatTabId),
    queryFormulation: (questionId, formulations) => queryFormulation(questionId, formulations, dispatch),
    updateAnswers: (answer) => dispatch(updateAnswers(answer)),
    updateActiveQuestionId: (activeQuestionId) => dispatch(updateActiveQuestionId(activeQuestionId)),
    toDefaultChatState: () => toDefaultChatState(dispatch),
    sendChatResult: (
        formulations,
        answers,
        adminId,
        customerEmail,
        tabId
    ) => sendChatResult(formulations, answers, adminId, customerEmail, tabId, dispatch),
});

export const TYPING_TIMEOUT = 2000;

export const ChatComponentContainer = (props) => {
    const {
        language,
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
        activeChatTabId,
        toDefaultChatState
    } = props;

    const navigation = useNavigation();

    const [chatMsgBottomOffset, setChatMsgBottomOffset] = useState(0);
    const [chatMsgHeight, setChatMsgHeight] = useState(0);
    const [inputTxt, setInputTxt] = useState('');
    const [prevActiveQstId, setPrevActiveQstId] = useState('');
    const [isTypingTimeoutOver, setIsTypingTimeoutOver] = useState(true);
    const [prevFormulations, setPrevFormulations] = useState([]);
    const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

    // querying the first batch of data
    useEffect(() => {
        if (!formulations.length) {
            runTypingTimeout();
        } else {
            setActiveQuestionIdx(formulations.length - 1);
        }
    }, []);

    // keyboard appearing events
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyBoardChange.bind(this, true));
        Keyboard.addListener('keyboardDidHide', onKeyBoardChange.bind(this, false));

        queryFirstFormul();

        return () => {
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
        }
    });

    // typing animation delay
    useEffect(() => {
        if (
            isTypingTimeoutOver
            && formulations.length !== prevFormulations.length
        ) {
            setActiveQuestionIdx(formulations.length - 1);
            setPrevFormulations(formulations);
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

    function runTypingTimeout() {
        if (
            activeChatChain.length !== formulations.length
            && activeQuestionIdx !== formulations.length
        ) {
            setIsTypingTimeoutOver(false);
        }

        setTimeout(() => {
            setIsTypingTimeoutOver(true);
        }, TYPING_TIMEOUT);
    }

    function onAnswerClick(answer) {
        const nextId = getNextActiveQstId(activeQuestionId, activeChatChain);

        runTypingTimeout();
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

    function showLastQstAlert() {
        Alert.alert(
            'Questionnaire is completed!',
            'Psychologist will contact you very soon via email.',
            [
                {
                    text: 'Ok',
                    onPress: onAlertSuccessClick
                }
            ]
        );
    }

    function onLastQuestionResponse(lastAnswer) {
        // setting answer, as the value doesn't contain the last anwser

        showLastQstAlert();

        sendChatResult(
            formulations,
            [ ...answers, lastAnswer ],
            activeChainAdminId,
            customerEmail,
            activeChatTabId
        );
    }

    function onAlertSuccessClick() {
        navigation.jumpTo(getIsLV(language) ? LV.NavigationDashboardTitle : 'Dashboard');
        toDefaultChatState();
    }

    function onInputChange(txt) {
        setInputTxt(txt);
    }

    function containerProps() {
        return {
            ...props,
            chatMsgBottomOffset,
            inputTxt,
            isTypingTimeoutOver,
            activeQuestionIdx,
        };
    }

    const containerFunctions = {
        onAnswerClick,
        onInputChange,
        onInputSend,
        setChatMsgHeight,
        onAlertSuccessClick
    }

    return (
        <ChatComponent
          { ...containerProps() }
          { ...containerFunctions }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponentContainer);