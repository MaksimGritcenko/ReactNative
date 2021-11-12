import React, {useEffect} from "react";
import { connect } from "react-redux";

import { setIsOnboarded } from 'store/User/User.action'
import OnBoarding from "./OnBoarding.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setPreferedLanguage} from "../../store/User/User.action";

export const mapStateToProps = state => ({
    isOnboarded: state.UserReducer.isOnboarded,
    language: state.UserReducer.language
});

export const mapDispatchToProps = (dispatch) => ({
    onSuccessBoarding: () => dispatch(setIsOnboarded(true)),
    setPreferedLanguage: language => dispatch(setPreferedLanguage(language))
});

export const OnBoardingContainer = (props) => {
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

        setPreferedLanguage('eng')
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