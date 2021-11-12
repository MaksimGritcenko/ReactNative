import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import HomeComponent from "./Home.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../utils/Query";
import { setUserEmail, setIsOnboarded } from "store/User/User.action";
import {setPreferedLanguage} from "../../store/User/User.action";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email)),
    onSuccessBoarding: () => dispatch(setIsOnboarded(false)),
    setPreferedLanguage: language => dispatch(setPreferedLanguage(language))
});
export const HomeContainer = (props) => {
    const { opacity, onSuccessBoarding, setPreferedLanguage, language } = props;

    const [email, setEmail] = useState('');

    useEffect(async () => {
        const emailFromAsyncStorage = await AsyncStorage.getItem('@email');
        setEmail(emailFromAsyncStorage);
    });

    async function signOut() {
        const {
            // navigation,
            setEmail
        } = props;

        await logout();
        // onSuccessBoarding();
        // setPreferedLanguage(null)
        AsyncStorage.removeItem('@email');
        setEmail(null);
    }

    return (
        <HomeComponent
            email={ email }
            logout={ signOut }
            opacity={ opacity }
            language={ language }
        />
    )
}

export default connect(null, mapDispatchToProps)(HomeContainer);