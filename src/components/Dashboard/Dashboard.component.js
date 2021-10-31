import React, {useEffect} from "react";

import {Button, Pressable, Text, View} from "react-native";
import HomeComponent from "../../routes/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsComponent from "../SideDrawer/Settings/Settings.component";
import ChatHistoryComponent from "../SideDrawer/ChatHistory/ChatHistory.component";
import {NavigationContainer} from "@react-navigation/native";
import ChatComponent from "../SideDrawer/Chat/Chat.component";


const SideDrawer = createDrawerNavigator();

export const DashboardComponent = () => {

    function getNavMap() {
        return [
            {
                id: 1,
                name: "Dashboard",
                component: HomeComponent
            },
            {
                id: 2,
                name: "Settings",
                component: SettingsComponent
            },
            {
                id: 3,
                name: "ChatHistory",
                component: ChatHistoryComponent
            },
            {
                id: 4,
                name: 'Chat',
                component: ChatComponent
            }
        ];
    }

    function renderScreens() {
        return getNavMap().map(({ id, name, component }) => <SideDrawer.Screen
            name={ name }
            component={ component }
            key={ id }
        />);
    }

    return (
        <View style={{ height: '100%'}}>
            <NavigationContainer independent={true}>
                <SideDrawer.Navigator>
                    { renderScreens() }
                </SideDrawer.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default DashboardComponent;