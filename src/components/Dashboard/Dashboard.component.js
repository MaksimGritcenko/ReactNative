import React, { useState } from "react";

import {
    View
} from "react-native";
import HomeComponent from "../../routes/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsComponent from "../SideDrawer/Settings/Settings.component";
import ChatHistoryComponent from "../SideDrawer/ChatHistory/ChatHistory.component";
import {NavigationContainer} from "@react-navigation/native";

import ChatComponent from "../SideDrawer/Chat/Chat.component";
import { AntDesign } from '@expo/vector-icons';
import NotesComponent from "../SideDrawer/Notes";
import ImagesComponent from "../SideDrawer/Images/Notes.component";
import InstructionsComponent from "../SideDrawer/Instructions/Notes.component";

import {
    darkGreen,
    skyBlue
} from "../../constants/Colors";
import {StatusBar} from "expo-status-bar";

const SideDrawer = createDrawerNavigator();

export const DashboardComponent = ({ showNotesModal, isEditModalVisible }) => {
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
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    headerRight: () => (
                        <AntDesign
                            style={{ marginRight: 20}}
                            onPress={ () => showSmallModal() }
                            name={ renderIcon() } size={24}
                            color="#fff"
                        />
                    ),
                }
            },
            {
                id: 2,
                name: "Settings",
                component: SettingsComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    }
                }
            },
            {
                id: 3,
                name: "ChatHistory",
                component: ChatHistoryComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    }
                }
            },
            {
                id: 4,
                name: 'Chat',
                component: ChatComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    }
                }
            },
            {
                id: 5,
                name: 'Notes',
                component: NotesComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: isEditModalVisible ? darkGreen : skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    headerRight: () => (
                        <AntDesign
                            style={{ marginRight: 20}}
                            onPress={ () => showNotesModal() }
                            name="pluscircleo"  size={24}
                            color="#fff"
                        />
                    )
                }
            },
            {
                id: 6,
                name: 'Images',
                component: ImagesComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    }
                }
            },
            {
                id: 7,
                name: 'Instructions',
                component: InstructionsComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    }
                }
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
            >
                <SideDrawer.Navigator
                    screenOptions={{
                        drawerStyle: {
                            backgroundColor: darkGreen,
                        },
                        drawerLabelStyle: {
                            color: '#fff'
                        }
                    }}
                >
                    { renderScreens() }
                </SideDrawer.Navigator>
            </NavigationContainer>
            <StatusBar hidden={ true } />
        </View>
    );
};

export default DashboardComponent;