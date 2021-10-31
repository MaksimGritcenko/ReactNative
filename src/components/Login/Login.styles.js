import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    }
})

export default styles;