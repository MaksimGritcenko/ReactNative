import React from "react";
import { connect } from "react-redux";

import { setIsOnboarded } from 'store/User/User.action'
import OnBoarding from "./OnBoarding.component";

export const mapDispatchToProps = (dispatch) => ({
    onSuccessBoarding: () => dispatch(setIsOnboarded(true))
});

export const OnBoardingContainer = (props) => {
    function onDone() {
        const { onSuccessBoarding } = props;
        onSuccessBoarding();
    }

    const containerFunctions = {
        onDone
    };

    return (
        <OnBoarding
          { ...props }
          { ...containerFunctions }
        />
    );
}

export default connect(null, mapDispatchToProps)(OnBoardingContainer);