import { StyleSheet } from "react-native";

import { CONTENT_PADDING_TOP } from '../../constants/Layout';
import { darkOverlay, lightGray } from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        height: '100%',
        paddingTop: CONTENT_PADDING_TOP,
        backgroundColor: darkOverlay,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: lightGray,
        width: '90%',
        paddingLeft: 15,
        paddingVertical: 10,
        borderRadius: 10,
        color: '#fff',
        marginBottom: 30
    },
    button: {
        marginTop: 20,
        padding: 20,
        borderRadius: 20,
    },
    buttonContentText: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 0,
        margin: 0
    },
})

export default styles;
