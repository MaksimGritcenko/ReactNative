import { getCollectionDocsWithoutOrder } from '../../utils/Query';
import { PSYCHOTYPES_COLLECTION } from '../../utils/Constants/dbPathnames';

import { updatePsychotypes } from './PsychoTypes.action';

export const getPsychotypes = async (dispatch) => {
    try {
        const psychotypes = await getCollectionDocsWithoutOrder(PSYCHOTYPES_COLLECTION);
        dispatch(updatePsychotypes(psychotypes));
    } catch (e) {

    }
};
