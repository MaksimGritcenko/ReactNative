import {
    UPDATE_ACTIVE_CHAT_CHAIN,
    UPDATE_ACTIVE_QUESTION_ID,
    UPDATE_IS_CHAIN_LOADING,
    UPDATE_FORMULATIONS,
    UPDATE_IS_FORMULATION_LOADING,
    UPDATE_ANSWERS
} from "./Chat.action";

export const updateFormulations = (state, action) => {
    const { formulation } = action;
    const { formulations: prevFormulations } = state;

    const isAlreadyAsked = prevFormulations.reduce((acc, { formulationText }) => {
        if (formulationText === formulation.formulationText) {
            acc = true;
        }

        return acc;
    }, false);

    if (isAlreadyAsked) {
        return state;
    }

    const formulations = formulation
        ? [ ...prevFormulations, formulation ]
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

export const getInitialState = () => ({
    activeChatChain: {},
    activeQuestionId: null,
    formulations: [],
    answers: [],
    isChainLoading: false,
    isFormulationLoading: false,
});

export const ChatReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case UPDATE_ACTIVE_CHAT_CHAIN:
            const { activeChatChain } = action;

            return {
                ...state,
                activeChatChain
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

        case UPDATE_FORMULATIONS:
            return updateFormulations(state, action);

        case UPDATE_ANSWERS:
            return updateAnswers(state, action);

        default:
            return state;
    }
}

export default ChatReducer;