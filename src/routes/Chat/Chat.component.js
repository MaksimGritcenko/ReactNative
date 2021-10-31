import React from "react";
import {Text, View} from "react-native";

export const ChatComponent = () => {
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
            <Text style={{ fontSize: 30, fontWeight: "bold", opacity: 0.3}}>
                Chat
            </Text>
        </View>
    )
}

export default ChatComponent;