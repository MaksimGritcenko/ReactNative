import React, {useEffect, useState} from "react";

import {Button, Pressable, Text, View} from "react-native";
import HomeComponent from "../../routes/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsComponent from "../SideDrawer/Settings/Settings.component";
import ChatHistoryComponent from "../SideDrawer/ChatHistory/ChatHistory.component";
import {NavigationContainer} from "@react-navigation/native";
import ChatComponent from "../SideDrawer/Chat/Chat.component";
import { AntDesign } from '@expo/vector-icons';

const SideDrawer = createDrawerNavigator();

export const DashboardComponent = () => {
    const [opacity, setOpacity] = useState(0);

    function showSmallModal() {
        setOpacity(1)

        if (opacity === 1) setOpacity(0)
    }

    function Home() {
        return <HomeComponent opacity={ opacity } />;
    }

    function renderIcon() {
        if (opacity === 1) return 'upcircleo';

        return 'downcircleo';
    }

    function getNavMap() {
        return [
            {
                id: 1,
                name: "Dashboard",
                component: Home,
                options: {
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <AntDesign  style={{ marginRight: 20}} onPress={() => showSmallModal()} name={ renderIcon() } size={24} color="black" />
                    )
                }
            },
            {
                id: 2,
                name: "Settings",
                component: SettingsComponent,
                options: null
            },
            {
                id: 3,
                name: "ChatHistory",
                component: ChatHistoryComponent,
                options: null
            },
            {
                id: 4,
                name: 'Chat',
                component: ChatComponent,
                options: null
            }
        ];
    }

    function renderScreens() {
        return getNavMap().map(({
            id,
            name,
            component,
            options
        }) => <SideDrawer.Screen
            name={ name }
            component={ component }
            key={ id }
            options={ options }
        />);
    }

    return (
        <View style={{ height: '100%'}}>
            <NavigationContainer
                independent={true}
                screenOptions={{
                    headerLeft: () => <Text>Hello</Text>
                }}
            >
                <SideDrawer.Navigator>
                    { renderScreens() }
                </SideDrawer.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default DashboardComponent;