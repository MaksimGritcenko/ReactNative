import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./Main.styles";
import Grass from '../../constants/images/grass-sky.png';
import {skyBlue} from "../../constants/Colors";

export const MainComponent = ({children}) => {
    return (
        <SafeAreaView style={{ ...styles.backgroundWrapper, backgroundColor: skyBlue } }>
            <ImageBackground source={Grass} style={ styles.grassImage }>
                { children }
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MainComponent;