import React from "react";
import {Text, View} from "react-native";

import { styles } from './ChatHistory.styles';
import LogoComponent from "../../Logo/Logo.component";

export const ChatHistoryComponent = () => {
    return (
        <View style={ styles.ChatHistory }>
            <LogoComponent />
            <View style={{ flex: 1}}>
                <Text>ChatHistory</Text>
            </View>
        </View>
    );
};

export default ChatHistoryComponent;