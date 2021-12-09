import React from "react";
import { Text, SafeAreaView } from "react-native";
import MainComponent from "../../Main/Main.component";

import { styles } from './Settings.style';

export const SettingsComponent = () => {
    return (
        <MainComponent>
            <SafeAreaView style={ styles.Settings }>
                <Text>
                    Settings
                </Text>
            </SafeAreaView>
        </MainComponent>
    );
}

export default SettingsComponent;