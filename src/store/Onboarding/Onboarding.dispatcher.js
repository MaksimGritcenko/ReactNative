import { getDocByPath } from '../../utils/Query';
import { CUSTOMIZABLE_CONTENT, CUSTOMIZABLE_ONBOARDING } from '../../utils/Constants/dbPathnames';

import { updateOnboardingContent, updateIsOnboardingContentLoading } from './Onboarding.action';

export const getOnboardingContent = async (dispatch) => {
    const path = `${ CUSTOMIZABLE_CONTENT }/${ CUSTOMIZABLE_ONBOARDING }`;

    try {
        dispatch(updateIsOnboardingContentLoading(true));
        const content = await getDocByPath(path);
        dispatch(updateOnboardingContent(content));
    } catch (e) {

    } finally {
        dispatch(updateIsOnboardingContentLoading(false));
    }
};
