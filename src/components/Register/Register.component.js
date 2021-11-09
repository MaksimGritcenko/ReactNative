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

export const RegisterComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <View style={ styles.container }>
                    <Image style={ styles.logo } source={require('../Login/images/skullLogo3.png')} />
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>Registration</Text>
                        <TextInput
                            style={ styles.textInput }
                            placeholder="Email"
                            onChangeText={text => setEmail(text) }
                        />
                        <TextInput
                            style={ [styles.textInput, { marginTop: 10}] }
                            placeholder="Password"
                            onChangeText={ text => setPassword(text)}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={ [styles.textInput, { marginTop: 10}] }
                            placeholder="Repeat Password"
                            onChangeText={ text => setConfirmPassword(text)}
                            secureTextEntry={true}
                        />
                        <Text
                            style={ styles.registerLink}
                            onPress={() => props.navigation.navigate('Login')}>
                            Already have an account? Click to login
                        </Text>
                        <Pressable
                            style={ styles.button }
                            onPress={ () => props.registerUser(email, password, confirmPassword) }
                        >
                            <Text style={ styles.buttonContentText }>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default RegisterComponent;