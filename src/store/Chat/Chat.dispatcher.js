


import {
    updateActiveChatChain,
    updateIsChainLoading,
    updateIsFormulationLoading,
    updateFormulations,
    updateActiveQuestionId
} from './Chat.action';

import {
    getCollectionDocsByWhere,
    getDocByPath
} from '../../utils/Query';

import { QUESTION_COLLECTION, QUESTION_FORMULATIONS_COLLECTION } from '../../utils/Constants'


export async function getChatQuestionsForChain(dispatch, activeQstId) {
    dispatch(updateIsChainLoading(true));

    const tabId = '4MUgKyzSjLIbgbteWyah';

    try {
        const questionsForTab = await getCollectionDocsByWhere(QUESTION_COLLECTION, 'tabId', tabId);
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

export async function queryFormulation(questionId, dispatch) {
    dispatch(updateIsFormulationLoading(true));
    const path = `${ QUESTION_COLLECTION }/${ questionId }/${ QUESTION_FORMULATIONS_COLLECTION }/E3YRU8WwodGFgCGJANmY`;

    try {
        const formualation = await getDocByPath(path);
        dispatch(updateFormulations(formualation));
    } catch (e) {

    } finally {
        dispatch(updateIsFormulationLoading(false));
    }
}
