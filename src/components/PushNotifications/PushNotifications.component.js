import React, {useState} from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View
} from "react-native";

import styles from "../Login/Login.styles";
import {darkGreen} from "../../constants/Colors";
import LV from '../../utils/Translations/lv.json';
import { IOS_PLATFORM } from "./PushNotifications.config";

export const PushNotificationsComponent = ({ sendPushNotification, language }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    function getLanguage() {
        return language === 'lv';
    }

    function renderTitle() {
        return getLanguage() ? LV.NotificationTitle : 'Send notifications'
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={ Platform.OS === IOS_PLATFORM ? "padding" : "height" }
            >
                <View>
                    <View style={{ borderColor: 'red', alignItems: 'center'}} >
                        <Text style={ { ... styles.title, marginTop: 100 } }>
                            { renderTitle() }
                        </Text>
                        <TextInput
                            style={ styles.textInput }
                            placeholder="Title"
                            onChangeText={text => setTitle(text) }
                            value={ title }
                        />
                        <TextInput
                            style={ [styles.textInput, { marginTop: 10}] }
                            placeholder="Text"
                            onChangeText={ text => setText(text)}
                            value={ text }
                        />
                        <Pressable
                            style={{ ...styles.button, backgroundColor: darkGreen, width: '50%'} }
                            onPress={ () => {
                                sendPushNotification(title, text);
                                setText('');
                                setTitle('');
                            } }
                        >
                            <Text style={ styles.buttonContentText }>Send Notifications</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default PushNotificationsComponent;