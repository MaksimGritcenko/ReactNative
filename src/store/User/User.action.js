export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_IS_ONBOARDED = 'SET_IS_ONBOARDED';
export const SET_PREFERED_LANGUAGE = 'SET_PREFERED_LANGUAGE';

export const setUserEmail = (email) => ({
    type: SET_USER_EMAIL,
    email
});

export const setIsOnboarded = (isOnboarded) => ({
    type: SET_IS_ONBOARDED,
    isOnboarded
});

export const setPreferedLanguage = (language) => ({
    type: SET_PREFERED_LANGUAGE,
    language
})