import React from "react";
import {connect} from "react-redux";

import LoginComponent from "./Login.component";
import { signInWithEmailAndPassword } from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
});

export const LoginContainer = (props) => {
    async function loginClick(email, password) {
        const {
            setEmail,
            navigation
        } = props;

        const user = await signInWithEmailAndPassword(email, password);

        if (!user) return;

        const { user: { email: userEmail } } = user;

        await AsyncStorage.setItem('@email', userEmail);

        setEmail(email);
        navigation.navigate('Dashboard');
    }

    return (
        <LoginComponent
            { ...props }
            loginClick={ loginClick }
        />
    );
}

export default connect(null, mapDispatchToProps)(LoginContainer);