import {
    Dimensions,
    StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    logoutButtonWrapper:{
        padding: 20,
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent',
    },
    logoutButton: {
    },
    container: {
        flex: 1,
        width,
        alignItems: 'center'
    },
    searchInput: {
        borderWidth: 1,
        borderRadius: 15,
        width: '90%',
        padding: 10
    }
})