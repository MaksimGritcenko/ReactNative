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
    const [email, setEmail] = useState('');

    useEffect(async () => {
        const emailFromAsyncStorage = await AsyncStorage.getItem('@email')

        setEmail(emailFromAsyncStorage)

    })

    async function signOut() {
        const { navigation } = props;
        await logout();
        AsyncStorage.removeItem('@email')
        props.setEmail(null)
        navigation.navigate('Login')
    }

    return (
        <HomeComponent
            email={ email }
            logout={ signOut }
        />
    )
}

export default connect(null, mapDispatchToProps)(HomeContainer);