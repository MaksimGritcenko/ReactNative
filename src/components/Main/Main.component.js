import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./Main.styles";
import Grass from '../../constants/images/grass-sky.png';

export const MainComponent = ({children}) => {
    return (
        <SafeAreaView style={ styles.backgroundWrapper }>
            <ImageBackground source={Grass} style={ styles.grassImage }>
                { children }
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MainComponent;