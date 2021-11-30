import React, { useState } from 'react';
import {connect} from "react-redux";

import LoginComponent from "./Login.component";
import { signInWithEmailAndPassword } from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
});

export const LoginContainer = (props) => {
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

    return (
        <LoginComponent
            { ...props }
            loginClick={ loginClick }
            isLoading={ isLoading }
        />
    );
}

export default connect(null, mapDispatchToProps)(LoginContainer);