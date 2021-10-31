import React from "react";
import {Button, Text, View} from "react-native";

export const HomeComponent = ({ email, logout }) => {
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
            <Text>Dashboard</Text>
            <Text>Welcome { email }</Text>
            <Button title="Logout" onPress={ logout } />
        </View>
    )
}

export default HomeComponent;