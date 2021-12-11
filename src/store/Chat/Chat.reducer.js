import {
    UPDATE_ACTIVE_CHAT_CHAIN,
    UPDATE_ACTIVE_QUESTION_ID,
    UPDATE_IS_CHAIN_LOADING,
    UPDATE_FORMULATIONS,
    UPDATE_IS_FORMULATION_LOADING,
    UPDATE_ANSWERS,
    UPDATE_IS_CHAT_DATA_SENDING,
    UPDATE_ACTIVE_CHAT_TAB_ID,
    UPDATE_SEARCH_RESULTS,
    UPDATE_IS_SEARCHING,
    UPDATE_ACTIVE_CHAIN_ADMIN_ID
} from "./Chat.action";

import { getIsAlreadyAsked } from '../../utils/ChatHelpers';

export const updateFormulations = (state, action) => {
    const { formulation, questionId } = action;
    const { formulations: prevFormulations } = state;

    const isAlreadyAsked = getIsAlreadyAsked(prevFormulations, questionId);

    if (isAlreadyAsked) {
        return state;
    }

    const formulations = formulation
        ? [ ...prevFormulations, { ...formulation, questionId } ]
        : [];

    return {
        ...state,
        formulations
    };
}

export const updateAnswers = (state, action) => {
    const { answer } = action;
    const { answers: prevAnswers } = state;

    const answers = answer
        ? [ ...prevAnswers, answer ]
        : [];

    return {
        ...state,
        answers
    };
}

export const updateActiveChatChain = (state, action) => {
    const { activeChatChain } = action;

    if (!Object.keys(activeChatChain).length) {
        return {
            ...state,
            activeChatChain
        };
    }

    const activeChainAdminId = activeChatChain[0].data.adminId;

    return {
        ...state,
        activeChatChain,
        activeChainAdminId
    }
}

export const getInitialState = () => ({
    activeChatChain: {},
    activeChatTabId: '',
    activeChainAdminId: '',
    activeQuestionId: null,
    formulations: [],
    answers: [],
    isChainLoading: false,
    isFormulationLoading: false,
    isChatDataSending: false,
    searchResults: [],
    isSearching: false
});

export const ChatReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case UPDATE_ACTIVE_CHAT_CHAIN:
            return updateActiveChatChain(state, action);

        case UPDATE_ACTIVE_CHAT_TAB_ID:
            const { activeChatTabId } = action;

            return {
                ...state,
                activeChatTabId
            }

        case UPDATE_IS_CHAIN_LOADING:
            const { isChainLoading } = action;

            return {
                ...state,
                isChainLoading
            }

        case UPDATE_ACTIVE_QUESTION_ID:
            const { activeQuestionId } = action;

            return {
                ...state,
                activeQuestionId
            }

        case UPDATE_IS_FORMULATION_LOADING:
            const { isFormulationLoading } = action;

            return {
                ...state,
                isFormulationLoading
            }

        case UPDATE_ACTIVE_CHAIN_ADMIN_ID:
            const { activeChainAdminId } = action;

            return {
                ...state,
                activeChainAdminId
            }

        case UPDATE_IS_CHAT_DATA_SENDING:
            const { isChatDataSending } = action;

            return {
                ...state,
                isChatDataSending
            }

        case UPDATE_SEARCH_RESULTS:
            const { searchResults } = action;

            return {
                ...state,
                searchResults
            }

        case UPDATE_IS_SEARCHING:
            const { isSearching } = action;

            return {
                ...state,
                isSearching
            }

        case UPDATE_FORMULATIONS:
            return updateFormulations(state, action);

        case UPDATE_ANSWERS:
            return updateAnswers(state, action);

        default:
            return state;
    }
}

export default ChatReducer;