import React, {useState} from "react";

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

import styles from './Login.styles';

export const LoginComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? "padding" : "height" }
            >
                <View style={ styles.container }>
                    <Image style={ styles.logo } source={require('./images/skullLogo3.png')} />
                    <View style={ styles.formWrapper }>
                        <Text style={ styles.title }>Login</Text>
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
                        <Text
                            style={styles.registerLink}
                            onPress={() => props.navigation.navigate('Signup')}>
                            Doesn't have account? Click to register
                        </Text>
                        <Pressable
                            style={ styles.button }
                            onPress={ () => props.loginClick(email, password) }
                        >
                            <Text style={ styles.buttonContentText }>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginComponent;