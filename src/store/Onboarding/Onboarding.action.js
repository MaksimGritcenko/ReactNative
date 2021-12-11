export const UPDATE_ONBOARDING_CONTENT = 'UPDATE_ONBOARDING_CONTENT';
export const UPDATE_IS_ONBOARDING_CONTENT_LOADING = 'UPDATE_IS_ONBOARDING_CONTENT_LOADING';

export const updateOnboardingContent = (onboardingContent) => ({
    type: UPDATE_ONBOARDING_CONTENT,
    onboardingContent,
});

export const updateIsOnboardingContentLoading = (isOnboardingContentLoading) => ({
    type: UPDATE_IS_ONBOARDING_CONTENT_LOADING,
    isOnboardingContentLoading,
});
