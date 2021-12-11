import React, {useEffect, useState} from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";

import MainComponent from "../../components/Main/Main.component";
import styles from "./PushNotifications.styles";
import { darkBlue, placeholderTextColor, lightGray } from "../../constants/Colors";
import { IOS_PLATFORM } from "./PushNotifications.config";

export const PushNotificationsComponent = ({ sendPushNotification, language }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [isAbleToSend, setIsAbleToSend] = useState(false);

    useEffect(() => {
        if (title && text) {
            setIsAbleToSend(true);
        } else {
            setIsAbleToSend(false);
        }
    });

    return (
        <MainComponent>
            <View style={ styles.container }>
                <KeyboardAvoidingView
                    style={{ backgroundColor: 'transparent' }}
                    behavior={ Platform.OS === IOS_PLATFORM ? "padding" : "height" }
                >
                    <View>
                        <View style={{ alignItems: 'center'}} >
                            <TextInput
                                style={ styles.textInput }
                                placeholder="Title"
                                placeholderTextColor={ placeholderTextColor }
                                onChangeText={text => setTitle(text) }
                                value={ title }
                            />
                            <TextInput
                                style={ [styles.textInput, { marginTop: 10 }] }
                                placeholder="Text"
                                placeholderTextColor={ placeholderTextColor }
                                onChangeText={ text => setText(text)}
                                value={ text }
                            />
                                <TouchableOpacity
                                    style={ {
                                        ...styles.button,
                                        backgroundColor: isAbleToSend ? darkBlue : lightGray,
                                    } }
                                    activeOpacity={ .9 }
                                    disabled={ !isAbleToSend }
                                    onPress={ () => {
                                        sendPushNotification(title, text);
                                        setText('');
                                        setTitle('');
                                    } }
                                >
                                    <Text
                                      style={ {
                                          ...styles.buttonContentText,
                                          color: isAbleToSend ? lightGray : darkBlue
                                        } }
                                    >
                                        Send Notifications
                                    </Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </MainComponent>
    );
}

export default PushNotificationsComponent;