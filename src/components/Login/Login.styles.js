import { StyleSheet } from "react-native";

import {
    placeholderTextColor
} from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        height: '100%',
    },
    textInput: {
        borderBottomWidth: 1,
        width: '100%',
        paddingLeft: 45,
        paddingVertical: 10,
        borderRadius: 10,
        color: '#fff',
        marginBottom: 30
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        marginTop: 20,
        paddingVertical: 20,
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
        fontWeight: 'bold',
        width: '90%',
        color: '#f5f1f5'
    },
    registerLink: {
        color: placeholderTextColor,
        marginTop: 20,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    formWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#414555',
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
        top: 10
    },
    buttonContainer: {
        width: '75%'
    }
})

export default styles;