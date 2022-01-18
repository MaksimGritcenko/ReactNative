import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        paddingTop: Platform.OS === 'ios' ? 15 : 30
    },
    addImageButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#fff"

    },
    saveButton: {
        position: "absolute",
        top: Platform.OS === 'ios' ? 30 : 70,
        right: 25,
    }
})