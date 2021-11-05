import React from "react";
import {
    Text,
    View,
    Button
} from "react-native";

import {styles} from "./Home.styles";

export const HomeComponent = ({ email, logout }) => {
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
            <Text>Dashboard</Text>
            <Text>Welcome { email }</Text>
            <View style={ styles.logoutButton }>
                <Button title="Logout" onPress={ logout } />
            </View>
        </View>
    )
}

export default HomeComponent;