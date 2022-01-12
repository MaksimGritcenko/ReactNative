import React, { useState } from 'react';
import { connect } from "react-redux";

import RegisterComponent from "./Register.component";
import {addDocWithAutoId, registerWithEmailAndPassword} from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";
import * as Notifications from "expo-notifications";
import { emailValidate, passwordValidate } from '../../utils/UseFullFunctions';
import { Alert } from 'react-native';
import {
    EMAIL_ERROR_MESSAGE,
    EMAIL_ERROR_TITLE, EXPO_TOKEN_PUSH_PATH,
    PASSWORD_ERROR_MESSAGE,
    PASSWORD_ERROR_TITLE
} from './Register.config';

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
})
export const RegisterContainer = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    async function registrationClick(email, password, confirmPassword) {
        const { setEmail, navigation } = props;

        // emailValidate(email)
        // if (!emailValidate(email)) {
        //     Alert.alert(EMAIL_ERROR_TITLE, EMAIL_ERROR_MESSAGE);
        //     return;
        // }

        // if (!passwordValidate(password) || (password !== confirmPassword) ) {
        //     Alert.alert(PASSWORD_ERROR_TITLE, PASSWORD_ERROR_MESSAGE);
        //     return
        // }

        setIsLoading(true);
        const user = await registerWithEmailAndPassword(null, email, password)

        if (!user) {
            setIsLoading(false);
        }

        await saveNotificationToken();

        await AsyncStorage.setItem('@email', email)
        setEmail(email)
        navigation.navigate('Dashboard')
    }

    async function saveNotificationToken() {
        const { status } = await Notifications.getPermissionsAsync();
        const path = EXPO_TOKEN_PUSH_PATH;

        let finalStatus = status;

        if (status !== 'granted') {
            const a = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            finalStatus = a.status;
        }

        if (finalStatus !== 'granted') return;

        let token = await Notifications.getExpoPushTokenAsync();


        const data = {
            expoToken: token
        }

        await addDocWithAutoId(path, data)

    }

    return(
        <RegisterComponent
            registerUser={ registrationClick }
            { ...props }
            isLoading={ isLoading }
        />
    )
}

export default connect(null, mapDispatchToProps)(RegisterContainer);