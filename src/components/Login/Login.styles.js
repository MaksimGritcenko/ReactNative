import { StyleSheet } from "react-native";

import {
    black,
    white,
} from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        height: '100%',
    },
    textInput: {
        width: '100%',
        paddingLeft: 45,
        paddingVertical: 20,
        borderRadius: 10,
        color: black,
        marginBottom: 30,
        backgroundColor: white
    },
    button: {
        backgroundColor: 'rgba(0,0,0,1)',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonContentText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 0,
        margin: 0
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        width: '90%',
        color: black
    },
    registerLink: {
        color: white,
        marginTop: 20,
        textAlign: 'center',
    },
    formWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textInputWrapper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 22,
        zIndex: 1
    },
    buttonContainer: {
        width: '75%'
    }
})

export default styles;