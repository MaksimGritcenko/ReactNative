import React from "react";
import { connect } from "react-redux";

import RegisterComponent from "./Register.component";
import { registerWithEmailAndPassword } from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
})
export const RegisterContainer = (props) => {
    async function registrationClick(email, password, confirmPassword) {
        const { setEmail, navigation } = props;

        if (password !== confirmPassword) return alert('Password and Repeat Password should match')

        await registerWithEmailAndPassword(null, email, password)

        await AsyncStorage.setItem('@email', email)
        setEmail(email)
        navigation.navigate('Dashboard')
    }

    return(
        <RegisterComponent
            registerUser={ registrationClick }
            { ...props }
        />
    )
}

export default connect(null, mapDispatchToProps)(RegisterContainer);