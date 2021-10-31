import React, {useState} from "react";

import {Text, View, TextInput, Pressable, SafeAreaView} from "react-native";

import styles from './Login.styles';

export const LoginComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
                <View style={ styles.container }>
                    <Text style={ styles.title }>Welcome, please Login to continue</Text>
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
        </SafeAreaView>
    )
}

export default LoginComponent;