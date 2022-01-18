import React, { useState } from "react";

import {
    Text,
    View,
    TextInput,
    Pressable,
    Image,
    KeyboardAvoidingView,
    Platform, ImageBackground
} from "react-native";

import { black } from '../../constants/Colors';

import styles from '../Login/Login.styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import BGImage from '../../constants/images/bg.jpg';
import { StatusBar } from "expo-status-bar";
import LV from "../../utils/Translations/lv.json";

export const RegisterComponent = (props) => {
    const { isLoading, isLatvian } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View>
            <StatusBar hidden={ false } style="dark"/>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <ImageBackground source={ BGImage } style={ styles.container }>
                    <Image style={ styles.logo } source={require('../Login/images/skullLogo3.png')} />
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>{ isLatvian ? LV.RegisterTitle : 'Registration' }</Text>
                        <View style={{ width: '75%'}}>
                            <View style={ styles.textInputWrapper }>
                                <View style={ styles.icon }>
                                    <Feather
                                        name="user"
                                        size={ 24 }
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
                            <View style={ { ...styles.textInputWrapper, flexDirection: 'column'} }>
                                <View style={{ ...styles.icon, marginTop: 10 } }>
                                    <Ionicons
                                        name="lock-closed-outline"
                                        size={ 24 }
                                        color={ black }
                                    />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder={ isLatvian ? LV.TextInputPassword : 'Password' }
                                  placeholderTextColor={ black }
                                  onChangeText={ text => setPassword(text)}
                                  secureTextEntry={true}
                                />
                            </View>
                            <View style={ { ...styles.textInputWrapper, flexDirection: 'column'} }>
                                <View style={{ ...styles.icon, marginTop: 10 } }>
                                    <Ionicons
                                        name="lock-closed-outline"
                                        size={ 24 }
                                        color={ black }
                                    />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder={ isLatvian ? LV.TextInputPasswordRepeat : 'Repeat Password' }
                                  placeholderTextColor={ black }
                                  onChangeText={ text => setConfirmPassword(text)}
                                  secureTextEntry={true}
                                />
                            </View>
                        </View>

                        <View style={ styles.buttonContainer }>
                            <Pressable
                              style={{
                                  ...styles.button,
                                  opacity: isLoading ? .4 : 1
                              } }
                              onPress={ () => props.registerUser(email, password, confirmPassword) }
                            >
                                <Text style={ styles.buttonContentText }>{ isLatvian ? LV.RegisterTitle : 'Register' }</Text>
                            </Pressable>
                            <Text
                              style={ styles.registerLink}
                              onPress={() => props.navigation.navigate('Login')}>
                                { isLatvian ? LV.LoginLinkTitle : 'Already have an account? Click to login' }
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    );
}

export default RegisterComponent;