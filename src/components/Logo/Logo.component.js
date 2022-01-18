import React from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getIsLV } from "../../utils/Translations/Translations";
import LV from "../../utils/Translations/lv.json";
import { Image, TouchableOpacity, View } from "react-native";
import Logo from "../../constants/images/Logo.jpg";

import { styles } from './Logo.styles';

export const mapStateToProps = state => ({
    language: state.UserReducer.language
});

export const LogoComponent = (props) => {
    const { language } = props;
    const navigation = useNavigation();

    function redirectToHome() {
        navigation.jumpTo(getIsLV(language) ? LV.NavigationDashboardTitle : 'Dashboard')
    }

    return (
        <View
            style={ styles.backgroundWrapper }

        >
            <TouchableOpacity activeOpacity={ .9 } onPress={ () => redirectToHome() } style={ styles.LogoWrapper } >
                <Image source={ Logo } style={ styles.Logo } />
            </TouchableOpacity>
        </View>
    );
}

export default connect(mapStateToProps, null)(LogoComponent);