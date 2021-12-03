import React, { useState } from "react";

import {
    View
} from "react-native";
import HomeComponent from "../../routes/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsComponent from "../SideDrawer/Settings/Settings.component";
import ChatHistoryComponent from "../SideDrawer/ChatHistory/ChatHistory.component";
import {NavigationContainer} from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

import ChatComponent from "../SideDrawer/Chat";
import { AntDesign } from '@expo/vector-icons';
import NotesComponent from "../SideDrawer/Notes";
import ImagesComponent from "../SideDrawer/Images";
import InstructionsComponent from "../SideDrawer/Instructions";
import PushNotifications from "../PushNotifications";

import LV from '../../utils/Translations/lv.json';

import {
    darkGreen,
    skyBlue
} from "../../constants/Colors";
import {StatusBar} from "expo-status-bar";

const SideDrawer = createDrawerNavigator();

export const DashboardComponent = (props) => {
    const {
        showNotesModal,
        isEditModalVisible,
        language,
        showAddImageModal,
        imageUriArray,
        admin
    } = props;
    const [opacity, setOpacity] = useState(0);

    function showSmallModal() {
        setOpacity(1)

        if (opacity === 1) setOpacity(0)
    }

    function Home() {
        return <HomeComponent language={ language } opacity={ opacity } />;
    }

    function renderIcon() {
        if (opacity === 1) return 'upcircleo';

        return 'downcircleo';
    }

    function getLanguage() {
        return language === 'lv';
    }

    function getNavMap() {
        return [
            {
                id: 1,
                name: getLanguage() ? LV.NavigationDashboardTitle : 'Dashboard',
                component: Home,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    // Enable Logout button if necessary
                    // headerRight: () => (
                    //     <AntDesign
                    //         style={{ marginRight: 20}}
                    //         onPress={ () => showSmallModal() }
                    //         name={ renderIcon() } size={24}
                    //         color="#fff"
                    //     />
                    // ),
                }
            },
            {
                id: 2,
                name: getLanguage() ? LV.NavigationSettingsTitle : "Settings",
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
                name: getLanguage() ? LV.NavigationChatHistoryTitle : "ChatHistory",
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
                name: getLanguage() ? LV.NavigationChatTitle : 'Chat',
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
                name: getLanguage() ? LV.NavigationNotesTitle : 'Notes',
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
                        <Entypo
                            style={{ marginRight: 20}}
                            onPress={ () => showNotesModal() }
                            name="new-message"
                            size={24}
                            color="#fff"
                        />
                    )
                }
            },
            {
                id: 6,
                name: getLanguage() ? LV.NavigationImagesTitle : 'Images',
                component: ImagesComponent,
                options: {
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: darkGreen,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    headerRight: () => {
                        if (imageUriArray && imageUriArray.length >= 10) return null;

                        return(
                            <AntDesign
                                style={{ marginRight: 20}}
                                onPress={ () => showAddImageModal() }
                                name="pluscircleo"  size={24}
                                color="#fff"
                            />
                        )
                    }
                },
            },
            {
                id: 7,
                name: getLanguage() ? LV.NavigationInstructionsTitle : 'Instructions',
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
            },
            {
                id: 8,
                name: getLanguage() ? LV.Notifications : 'Notifications',
                component: PushNotifications,
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
        }) => {
            if (!admin && name === LV.Notifications || (!admin && name === 'Notifications')) return null;

            return (
                    <SideDrawer.Screen
                        name={ name }
                        component={ component }
                        key={ id }
                        options={ options }
                    />
                );
        });
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