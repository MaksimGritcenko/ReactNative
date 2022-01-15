import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setIsOnboarded, setPreferedLanguage } from 'store/User/User.action'
import { getOnboardingContent } from "../../store/Onboarding/Onboarding.dispatcher";

import OnBoarding from "./OnBoarding.component";

export const mapStateToProps = state => ({
    isOnboarded: state.UserReducer.isOnboarded,
    language: state.UserReducer.language,
    onboardingContent: state.OnboardingReducer.onboardingContent,
});

export const mapDispatchToProps = (dispatch) => ({
    onSuccessBoarding: () => dispatch(setIsOnboarded(true)),
    setPreferedLanguage: language => dispatch(setPreferedLanguage(language)),
    getOnboardingContent: () => getOnboardingContent(dispatch),
});

export const OnBoardingContainer = (props) => {
    const {
        getOnboardingContent
    } = props;

    useEffect(() => {
        getOnboardingContent();
    }, []);

    function onDone() {
        const { onSuccessBoarding } = props;
        onSuccessBoarding();
    }

    function onLanguageSelect(id) {
        const { setPreferedLanguage } = props;

        if (id === 1) {
            setPreferedLanguage('lv')
            return;
        }

        setPreferedLanguage('en')
    }

    const containerFunctions = {
        onDone,
        onLanguageSelect
    };

    return (
        <OnBoarding
          { ...props }
          { ...containerFunctions }
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingContainer);