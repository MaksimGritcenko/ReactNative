import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        backgroundColor: '#23252a',
        flex: 1
    },
    wrapper: {
        backgroundColor: '#3e4577',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 15
    },
    modalHeader: {
        borderBottomWidth: 1,
        borderColor: '#cbcaca',
        paddingBottom: 10,
        backgroundColor: '#23252a',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15
    },
    contentWrapper: {
        marginTop: 10
    },
    modalContainer: {
        height: '100%',
        backgroundColor: '#23252a'
    },
    contentWrapperTitle: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        fontSize: 20,
        backgroundColor: '#23252a',
        color: '#fff'
    },
    contentWrapperContent: {
        borderBottomWidth: 1,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        borderColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#23252a',
        color: '#fff'
    },
    saveButton: {
        width: '80%',
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