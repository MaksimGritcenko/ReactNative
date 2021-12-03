import React, {useState} from "react";

import {
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    Platform, StatusBar
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import styles from './Login.styles';

export const LoginComponent = (props) => {
    const {
        isLoading,
        loginClick,
        navigation
    } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <StatusBar backgroundColor={'transparent'} translucent hidden={ true }/>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <View style={ styles.container }>
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>Log in</Text>
                        <View style={{ width: '75%'}}>
                            <View style={ styles.textInputWrapper }>
                                <View style={ styles.icon }>
                                    <AntDesign
                                      name="login"
                                      size={24}
                                      color="black"
                                    />
                                </View>
                                <TextInput
                                  style={ styles.textInput }
                                  placeholder="Email"
                                  placeholderTextColor="rgba(0,0,0,0.5)"
                                  onChangeText={text => setEmail(text) }
                                />
                            </View>
                            <View style={ styles.textInputWrapper }>
                                <View style={ styles.icon }>
                                    <Ionicons name="lock-closed-outline" size={29} color="black" />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder="Password"
                                  placeholderTextColor="rgba(0,0,0,0.5)"
                                  onChangeText={ text => setPassword(text)}
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
                              onPress={ () => props.loginClick(email, password) }
                            >
                                <Text style={ styles.buttonContentText }>Log in</Text>
                            </Pressable>
                            <Text
                              style={styles.registerLink}
                              onPress={() => navigation.navigate('Signup')}>
                                First time? Click to sign up
                            </Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginComponent;