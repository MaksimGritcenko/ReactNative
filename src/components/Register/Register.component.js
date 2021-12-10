import React, { useState } from "react";

import {
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import styles from '../Login/Login.styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const RegisterComponent = (props) => {
    const { isLoading } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <View style={ styles.container }>
                    <Image style={ styles.logo } source={require('../Login/images/skullLogo3.png')} />
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>Registration</Text>
                        <View style={{ width: '75%'}}>
                            <View style={ styles.textInputWrapper }>
                                <View style={ styles.icon }>
                                    <Feather name="user" size={29} color="white" />
                                </View>
                                <TextInput
                                  style={ styles.textInput }
                                  placeholder="Email"
                                  placeholderTextColor="rgba(255,255,255,.5)"
                                  onChangeText={text => setEmail(text) }
                                />
                            </View>
                            <View style={ { ...styles.textInputWrapper, flexDirection: 'column'} }>
                                <View style={ styles.icon }>
                                    <Ionicons name="lock-closed-outline" size={29} color="white" />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder="Password"
                                  placeholderTextColor="rgba(255,255,255,.5)"
                                  onChangeText={ text => setPassword(text)}
                                  secureTextEntry={true}
                                />
                            </View>
                            <View style={ { ...styles.textInputWrapper, flexDirection: 'column'} }>
                                <View style={ styles.icon }>
                                    <Ionicons name="lock-closed-outline" size={29} color="white" />
                                </View>
                                <TextInput
                                  style={ [styles.textInput, { marginTop: 10}] }
                                  placeholder="Repeat Password"
                                  placeholderTextColor="rgba(255,255,255,5)"
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
                                <Text style={ styles.buttonContentText }>Register</Text>
                            </Pressable>
                            <Text
                              style={ styles.registerLink}
                              onPress={() => props.navigation.navigate('Login')}>
                                Already have an account? Click to login
                            </Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default RegisterComponent;