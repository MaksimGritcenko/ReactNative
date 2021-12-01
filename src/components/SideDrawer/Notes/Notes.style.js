import {StyleSheet} from "react-native";
import { colorGreen, darkGreen } from '../../../constants/Colors';

export const styles = StyleSheet.create({
    container: {

    },
    wrapper: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: "#f2f2f2",
        flexDirection: 'column'
    },
    modalHeader: {
        borderColor: '#cbcaca',
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15
    },
    contentWrapper: {
        marginTop: 10
    },
    modalContainer: {
        height: '100%',
        backgroundColor: darkGreen
    },
    contentWrapperTitle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,.1)',
        borderRadius: 10,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff'
    },
    contentWrapperContent: {
        borderBottomWidth: 1,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderColor: 'rgba(255,255,255,.1)',
        borderRadius: 10,
        marginTop: 20,
        color: '#fff',
    },
    saveButton: {
        width: '95%',
        marginTop: 15,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
    },
    saveButtonText: {
        textAlign: "center",
        textTransform: 'uppercase',
        fontWeight: "bold",
        color: '#fff',
        fontSize: 20
    }
})