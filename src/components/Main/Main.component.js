import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./Main.styles";
import BGImg from '../../constants/images/background.jpg';

export const MainComponent = ({ children }) => {
    return (
        <SafeAreaView style={ styles.backgroundWrapper }>
            <ImageBackground source={ BGImg } style={ styles.grassImage }>
                { children }
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MainComponent;