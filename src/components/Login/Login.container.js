import React, { useState } from 'react';
import { connect } from "react-redux";

import LoginComponent from "./Login.component";
import { signInWithEmailAndPassword } from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";

export const mapsStateToProps = (state) => ({
    language: state.UserReducer.language
});

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
});

export const LoginContainer = (props) => {
    const { language } = props;

    const [isLoading, setIsLoading] = useState(false);

    async function loginClick(email, password) {
        const {
            setEmail,
            navigation
        } = props;

        setIsLoading(true);
        const user = await signInWithEmailAndPassword(email, password);

        if (!user) {
            setIsLoading(false);
            return;
        }

        const { user: { email: userEmail, uid } } = user;

        await AsyncStorage.setItem('@email', userEmail);
        await AsyncStorage.setItem('@uid', uid)

        setEmail(email);
        navigation.navigate('Dashboard');
    }

    function getLanguage() {
        return language === 'lv';
    }

    return (
        <LoginComponent
            { ...props }
            loginClick={ loginClick }
            isLoading={ isLoading }
            isLatvian={ getLanguage }
        />
    );
}

export default connect(mapsStateToProps, mapDispatchToProps)(LoginContainer);