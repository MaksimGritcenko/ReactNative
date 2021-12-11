export const UPDATE_ACTIVE_CHAT_CHAIN = 'UPDATE_ACTIVE_CHAT_CHAIN';
export const UPDATE_ACTIVE_QUESTION_ID = 'UPDATE_ACTIVE_QUESTION_ID';
export const UPDATE_IS_CHAIN_LOADING = 'UPDATE_IS_CHAIN_LOADING';
export const UPDATE_FORMULATIONS = 'UPDATE_FORMULATIONS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const UPDATE_IS_FORMULATION_LOADING = 'UPDATE_IS_FORMULATION_LOADING';
export const UPDATE_IS_CHAT_DATA_SENDING = 'UPDATE_IS_CHAT_DATA_SENDING';
export const UPDATE_ACTIVE_CHAT_TAB_ID = 'UPDATE_ACTIVE_CHAT_TAB_ID';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const UPDATE_IS_SEARCHING = 'UPDATE_IS_SEARCHING';
export const UPDATE_ACTIVE_CHAIN_ADMIN_ID = 'UPDATE_ACTIVE_CHAIN_ADMIN_ID';

export const updateActiveChatChain = (activeChatChain) => ({
    type: UPDATE_ACTIVE_CHAT_CHAIN,
    activeChatChain
});

export const updateActiveChatTabId = (activeChatTabId) => ({
    type: UPDATE_ACTIVE_CHAT_TAB_ID,
    activeChatTabId
});

export const updateActiveQuestionId = (activeQuestionId) => ({
    type: UPDATE_ACTIVE_QUESTION_ID,
    activeQuestionId
});

export const updateActiveChainAdminId = (activeChainAdminId) => ({
    type: UPDATE_ACTIVE_CHAIN_ADMIN_ID,
    activeChainAdminId
});

export const updateIsChainLoading = (isChainLoading) => ({
    type: UPDATE_IS_CHAIN_LOADING,
    isChainLoading
});

export const updateFormulations = (formulation, questionId) => ({
    type: UPDATE_FORMULATIONS,
    formulation,
    questionId
});

export const updateAnswers = (answer) => ({
    type: UPDATE_ANSWERS,
    answer
});

export const updateIsFormulationLoading = (isFormulationLoading) => ({
    type: UPDATE_IS_FORMULATION_LOADING,
    isFormulationLoading
});

export const updateIsChatDataSending = (isChatDataSending) => ({
    type: UPDATE_IS_CHAT_DATA_SENDING,
    isChatDataSending
});

export const updateSearchResults = (searchResults) => ({
    type: UPDATE_SEARCH_RESULTS,
    searchResults
});

export const updateIsSearching = (isSearching) => ({
    type: UPDATE_IS_SEARCHING,
    isSearching
});
