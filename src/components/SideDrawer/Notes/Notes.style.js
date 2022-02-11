import { StyleSheet, Platform } from "react-native";
import { darkBlue } from '../../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
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
        backgroundColor: darkBlue
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
        maxHeight: Platform.OS === 'ios' ? 185 : 200,
        alignSelf: 'center',
        borderColor: 'rgba(255,255,255,.1)',
        borderRadius: 10,
        marginTop: 20,
        color: '#fff',
    },
    saveButton: {
        width: '40%',
        marginTop: 20,
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 18,
        borderRadius: 10,
    },
    saveButtonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 20
    }
})