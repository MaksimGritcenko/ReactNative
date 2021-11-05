import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    logoutButtonWrapper:{
        padding: 20,
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    logoutButton: {
        color: '#000'
    }
})