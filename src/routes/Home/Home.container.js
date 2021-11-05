import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import HomeComponent from "./Home.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../utils/Query";
import { setUserEmail } from "store/User/User.action";

export const mapDispatchToProps = (dispatch) => ({
    setEmail: email => dispatch(setUserEmail(email))
});
export const HomeContainer = (props) => {
    const { opacity } = props;

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
        AsyncStorage.removeItem('@email');
        setEmail(null);
        // TODO: fix navigation is undefined on reload
        // navigation.navigate('Login');
    }

    return (
        <HomeComponent
            email={ email }
            logout={ signOut }
            opacity={ opacity }
        />
    )
}

export default connect(null, mapDispatchToProps)(HomeContainer);