import {
    updateActiveChatChain,
    updateIsChainLoading,
    updateIsFormulationLoading,
    updateFormulations,
    updateActiveQuestionId,
    updateIsChatDataSending,
    updateSearchResults,
    updateIsSearching,
    updateActiveChatTabId,
    updateAnswers,
    updateActiveChainAdminId
} from './Chat.action';

import {
    getCollectionDocsByWhere,
    getDocByPath,
    addDocWithAutoId
} from '../../utils/Query';

import { getServerTimestamp } from '../../utils/Firebase'

import { getIsAlreadyAsked } from '../../utils/ChatHelpers';

import {
    QUESTION_COLLECTION,
    QUESTION_FORMULATIONS_COLLECTION,
    ADMIN_COLLECTION,
    INBOX_SUBCOLLECTION
} from '../../utils/Constants'


export async function getChatQuestionsForChain(
    dispatch,
    activeChatTabId,
    activeQstId
) {
    dispatch(updateIsChainLoading(true));

    try {
        if (!activeChatTabId) {
            return;
        }

        const questionsForTab = await getCollectionDocsByWhere(QUESTION_COLLECTION, 'tabId', activeChatTabId);
        await queryFormulation(activeQstId, questionsForTab, dispatch);

        // palcing selected question in a front of array
        questionsForTab.sort((a) => {
            if (a.id === activeQstId) {
                return -1;
            }

            return 0
        });

        dispatch(updateActiveChatChain(questionsForTab));
        dispatch(updateActiveChatTabId(activeChatTabId));
        dispatch(updateActiveQuestionId(activeQstId));
    } catch (e) {

    } finally {
        dispatch(updateIsChainLoading(false));
    }
}

export async function queryFormulation(questionId, formulations, dispatch) {
    const isAlreadyAsked = getIsAlreadyAsked(formulations, questionId);

    if (!questionId || isAlreadyAsked) {
        return;
    }

    dispatch(updateIsFormulationLoading(true));
    const path = `${ QUESTION_COLLECTION }/${ questionId }/${ QUESTION_FORMULATIONS_COLLECTION }/E3YRU8WwodGFgCGJANmY`;

    try {
        const formualation = await getDocByPath(path);
        dispatch(updateFormulations(formualation, questionId));
    } catch (e) {

    } finally {
        dispatch(updateIsFormulationLoading(false));
    }
}

export async function sendChatResult(formulations, answers, adminId, customerEmail, tabId, dispatch) {
    const path = `${ ADMIN_COLLECTION }/${ adminId }/${ INBOX_SUBCOLLECTION }`;

    const dataToSend = {
        questionnaire: formulations.map((question, i) => ({ question, answer: answers[i] })),
        customerEmail,
        tabId,
        timestamp: getServerTimestamp()
    };

    try {
        dispatch(updateIsChatDataSending(true));
        await addDocWithAutoId(path, dataToSend)
    } catch(e) {

    } finally {
        dispatch(updateIsChatDataSending(false));
    }
}

export async function searchChatQsts(dispatch) {
    dispatch(updateIsSearching(true));

    const tabIds = [
        '4MUgKyzSjLIbgbteWyah',
        'aHjuDuZCUgLzdQyG9lYp'
    ];

    try {
        const questions = [];

        for (const id of tabIds) {
            const result = await getCollectionDocsByWhere(QUESTION_COLLECTION, 'tabId', id);
            questions.push(...result);
        }

        dispatch(updateSearchResults(questions));
    } catch (e) {

    } finally {
        dispatch(updateIsSearching(false));
    }
}

export function toDefaultChatState(dispatch) {
    dispatch(updateActiveChatChain({}));
    dispatch(updateActiveChainAdminId(''));
    dispatch(updateActiveChatTabId(''));
    dispatch(updateActiveQuestionId(''));
    dispatch(updateFormulations(null));
    dispatch(updateAnswers(null));
}
