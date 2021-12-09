import React from "react";
import { Text, SafeAreaView} from "react-native";
import MainComponent from "../../Main/Main.component";

import { styles } from './ChatHistory.styles';

export const ChatHistoryComponent = () => {
    return (
        <MainComponent >
            <SafeAreaView style={ styles.ChatHistory }>
                <Text>ChatHistory</Text>
            </SafeAreaView>
        </MainComponent>
    );
};

export default ChatHistoryComponent;