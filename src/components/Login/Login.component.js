import React, { useState } from "react";

import {
    Text,
    View,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform, ImageBackground
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

import {
    black,
} from "../../constants/Colors";
import BGImage from '../../constants/images/bg.jpg';
import LV from '../../utils/Translations/lv.json';

import styles from './Login.styles';

export const LoginComponent = (props) => {
    const {
        isLoading,
        navigation,
        isLatvian
    } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <StatusBar hidden={ false } style="dark"/>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <ImageBackground source={ BGImage } style={ styles.container }>
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>
                            { isLatvian ? LV.LoginTitle : 'Log in' }
                        </Text>
                        <View style={{ width: '75%'}}>
                            <View style={ styles.textInputWrapper }>
                                <View style={ styles.icon }>
                                    <AntDesign
                                      name="login"
                                      size={24}
                                      color={ black }
                                    />
                                </View>
                                <TextInput
                                  style={ styles.textInput }
                                  placeholder={ isLatvian ? LV.TextInputEmail : 'Email' }
                                  placeholderTextColor={ black }
                                  onChangeText={text => setEmail(text) }
                                />
                            </View>
                            <View style={ styles.textInputWrapper }>
                                <View style={{ ...styles.icon, marginTop: 5} }>
                                    <Ionicons
                                      name="lock-closed-outline"
                                      size={ 29 }
                                      color={ black }
                                    />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder={ isLatvian ? LV.TextInputPassword : 'Password' }
                                  placeholderTextColor={ black }
                                  onChangeText={ text => setPassword(text)}
                                  secureTextEntry={ true }
                                />
                            </View>
                        </View>
                        <View style={ styles.buttonContainer }>
                            <Pressable
                              style={ {
                                  ...styles.button,
                                  opacity: isLoading ? .4 : 1
                              } }
                              onPress={ () => props.loginClick(email, password) }
                            >
                                <Text style={ styles.buttonContentText }>
                                    { isLatvian ? LV.LoginButton : 'Log in' }
                                </Text>
                            </Pressable>
                            <Text
                              style={ styles.registerLink }
                              onPress={() => navigation.navigate('Signup')}>
                                { isLatvian ? LV.RegisterLinkText : 'First time? Click to sign up' }

                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginComponent;