import {
    UPDATE_ONBOARDING_CONTENT,
    UPDATE_IS_ONBOARDING_CONTENT_LOADING
} from './Onboarding.action';

export const getInitialState = () => ({
  onboardingContent: {},
  isOnboardingContentLoading: false,
});

export const OnboardingReducer = (
  state = getInitialState(),
  action,
) => {
  const {
    onboardingContent,
    isOnboardingContentLoading
  } = action;


  switch (action.type) {
    case UPDATE_ONBOARDING_CONTENT:
      return {
        ...state,
        onboardingContent
      }

    case UPDATE_IS_ONBOARDING_CONTENT_LOADING:
      return {
        ...state,
        isOnboardingContentLoading
      }

    default:
      return state;
  }
};

export default OnboardingReducer;
