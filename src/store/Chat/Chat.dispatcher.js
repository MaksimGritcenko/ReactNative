


import {
    updateActiveChatChain,
    updateIsChainLoading,
    updateIsFormulationLoading,
    updateFormulations,
    updateActiveQuestionId,
    updateIsChatDataSending
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


export async function getChatQuestionsForChain(dispatch, activeQstId, activeChatTabId) {
    dispatch(updateIsChainLoading(true));

    try {
        const questionsForTab = await getCollectionDocsByWhere(QUESTION_COLLECTION, 'tabId', activeChatTabId);
        dispatch(updateActiveChatChain(questionsForTab));

        if (activeQstId === null) {
            // TODO: hard coded first id
            dispatch(updateActiveQuestionId(questionsForTab[0].id));
        }
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
