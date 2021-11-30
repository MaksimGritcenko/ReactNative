import React, { useState } from 'react';
import { connect } from "react-redux";

import RegisterComponent from "./Register.component";
import {addDocWithAutoId, registerWithEmailAndPassword} from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmail } from "store/User/User.action";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
})
export const RegisterContainer = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    async function registrationClick(email, password, confirmPassword) {
        const { setEmail, navigation } = props;

        if ((password !== confirmPassword) || password.length === 0) {
            alert('Password and Repeat Password should match, or password is empty')
            return;
        }

        if (email.length === 0) {
            alert('email is empty')
            return;
        }

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
        const path = '/expoTokensForPushNotifications';

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