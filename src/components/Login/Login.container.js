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
        const { setEmail } = props;
        console.log(setEmail)
        const user = await signInWithEmailAndPassword(email, password)

        console.log(user.user.email)

        if (user === undefined) return null;

        await AsyncStorage.setItem('@email', user.user.email)
        await AsyncStorage.setItem('@loggedIn', 'logged')
        setEmail(email)
        props.navigation.navigate('Dashboard')
    }

    return (
        <LoginComponent
            { ...props }
            loginClick={ loginClick }
        />
    )
}

export default connect(null, mapDispatchToProps)(LoginContainer);