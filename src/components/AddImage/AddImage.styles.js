import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative'
    },
    addImageButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",

    },
    saveButton: {
        position: "absolute",
        top: 20,
        right: 25,
    }
})