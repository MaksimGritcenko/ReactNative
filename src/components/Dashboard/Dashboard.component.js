import React  from "react";

import {
    ImageBackground,
    View,
} from 'react-native';
import HomeComponent from "../../routes/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsComponent from "../SideDrawer/Settings";
import ChatHistoryComponent from "../SideDrawer/ChatHistory/ChatHistory.component";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import ChatComponent from "../SideDrawer/Chat";
import { AntDesign } from '@expo/vector-icons';
import NotesComponent from "../SideDrawer/Notes";
import ImagesComponent from "../SideDrawer/Images";
import InstructionsComponent from "../SideDrawer/Instructions";
import PushNotifications from "../PushNotifications";

import LV from '../../utils/Translations/lv.json';

import {
    darkBlue,
    skyBlue,
    black
} from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

import {
    Entypo,
    SimpleLineIcons,
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from '@expo/vector-icons';
import BGImg from "../../constants/images/bg.jpg";
import {styles} from "../Main/Main.styles";


const SideDrawer = createDrawerNavigator();

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const DashboardComponent = (props) => {
    const {
        showNotesModal,
        isEditModalVisible,
        language,
        showAddImageModal,
        imageUriArray,
        admin,
    } = props;

    function Home() {
        return <HomeComponent language={ language } />;
    }

    function getLanguage() {
        return language === 'lv';
    }

    function getNavMap() {
        const drawerLabelStyle = {
            color: '#fff',
            left: -15
        };

        return [
            {
                id: 1,
                name: getLanguage() ? LV.NavigationDashboardTitle : 'Dashboard',
                component: Home,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    gestureEnabled: true,
                    drawerIcon: () => (<SimpleLineIcons
                        name="home"
                        size={24}
                        color="#fff"
                    />),
                    headerStyle: {
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 },
                    },
                    drawerLabelStyle
                }
            },
            {
                id:2,
                name: getLanguage() ? LV.NavigationChatTitle : 'Chat',
                component: ChatComponent,
                isEnabled: false,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<Ionicons
                      name="chatbox-outline"
                      size={24}
                      color="#fff"
                    />),

                    isEnabled: false,
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    drawerLabelStyle
                }
            },
            {
                id: 3,
                name: getLanguage() ? LV.NavigationImagesTitle : 'Images',
                component: ImagesComponent,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<Ionicons
                      name="md-images-outline"
                      size={24}
                      color="#fff"
                    />),
                    headerStyle: {
                        backgroundColor: darkBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    drawerLabelStyle,
                    headerRight: () => {
                        if (imageUriArray && imageUriArray.length >= 10) return null;

                        return(
                          <AntDesign
                            style={{ marginRight: 20}}
                            onPress={ () => showAddImageModal() }
                            name="pluscircleo"
                            size={24}
                            color={ black }
                          />
                        )
                    }
                },
            },
            {
                id: 4,
                name: getLanguage() ? LV.NavigationNotesTitle : 'Notes',
                component: NotesComponent,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<MaterialIcons
                      name="notes"
                      size={24}
                      color="#fff"
                    />),
                    headerStyle: {
                        backgroundColor: isEditModalVisible ? darkBlue : skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    drawerLabelStyle,
                    headerRight: () => (
                      <Entypo
                        style={{ marginRight: 20}}
                        onPress={ () => showNotesModal() }
                        name="new-message"
                        size={24}
                        color={ black }
                      />
                    )
                }
            },
            {
                id: 5,
                name: getLanguage() ? LV.NavigationChatHistoryTitle : "ChatHistory",
                component: ChatHistoryComponent,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<MaterialCommunityIcons
                      name="history"
                      size={24}
                      color="#fff"
                    />),
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    drawerLabelStyle
                }
            },
            {
                id: 5,
                name: getLanguage() ? LV.NavigationSettingsTitle : "Settings",
                component: SettingsComponent,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<SimpleLineIcons
                      name="settings"
                      size={24}
                      color="#fff"
                    />),
                    headerStyle: {
                        backgroundColor: skyBlue,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 }
                    },
                    drawerLabelStyle
                }
            },
            {
                id: 7,
                name: getLanguage() ? LV.NavigationInstructionsTitle : 'Instructions',
                component: InstructionsComponent,
                options: {
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<Ionicons
                        name="ios-book-outline"
                        size={24}
                        color="#fff"
                    />),
                    drawerLabelStyle,
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
                    headerTitle: '',
                    lazy: false,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: black,
                    drawerIcon: () => (<Ionicons
                        name="md-notifications-outline"
                        size={24}
                        color="#fff"
                    />),
                    drawerLabelStyle,
                    headerStyle: {
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

    const statusBarStyle = 'dark';

    return (
        <ImageBackground source={ BGImg } style={ styles.grassImage }>
            <View style={{flex: 1}}>
                <NavigationContainer
                    independent={true}
                    theme={ navTheme }
                >
                    <SideDrawer.Navigator
                        screenOptions={{
                            drawerStyle: {
                                backgroundColor: darkBlue,
                            },
                            drawerLabelStyle: {
                                color: black
                            }
                        }}
                    >
                        { renderScreens() }
                    </SideDrawer.Navigator>
                </NavigationContainer>
                <StatusBar hidden={ false } style={ statusBarStyle } />
            </View>
        </ImageBackground>
    );
};

export default DashboardComponent;