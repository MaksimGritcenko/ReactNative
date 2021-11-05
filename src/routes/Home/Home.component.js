import React from "react";
import {
    Text,
    View,
    Pressable
} from "react-native";

import {styles} from "./Home.styles";

export const HomeComponent = ({ email, logout, opacity }) => {
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
            <Text>Dashboard</Text>
            <Text>Welcome { email }</Text>
            <View style={{ ...styles.logoutButtonWrapper, opacity: opacity} }>
                <View style={ styles.logoutButton }>
                    <Pressable title="Logout" onPress={ logout } >
                        <Text>Logout</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default HomeComponent;