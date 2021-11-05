import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#70fff1'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        width: '80%',
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '30%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    buttonContentText: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
        padding: 0,
        margin: 0
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    registerLink: {
        color: 'coral',
        fontWeight: 'bold',
        marginTop: 5,
    },
    formWrapper: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        // paddingTop: 15,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 50,
        backgroundColor: 'transparent',
    }
})

export default styles;