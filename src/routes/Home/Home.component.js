import React from "react";
import {
    Text,
    View,
    Pressable
} from "react-native";
import MainComponent from "../../components/Main/Main.component";
import {
    darkGreen,
} from "../../constants/Colors";

import LV from '../../utils/Translations/lv.json';

import { styles } from "./Home.styles";

export const HomeComponent = ({ email, logout, opacity, language }) => {
    return (
        <MainComponent>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
                <Text>Dashboard</Text>
                <Text>Welcome { email }</Text>
                <View style={{
                    ...styles.logoutButtonWrapper,
                    opacity,
                    borderWidth: 1,
                    borderColor: darkGreen,
                    borderRadius: 20 }}
                >
                    <View style={ styles.logoutButton }>
                        <Pressable title="Logout" onPress={ logout } >
                            <Text style={ { color: '#fff'}}>{ language === 'lv' ? LV.LogoutButton : "Logout"}</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </MainComponent>
    );
};

export default HomeComponent;