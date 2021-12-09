import {
    Dimensions,
    StyleSheet
} from 'react-native';

import { CONTENT_PADDING_TOP } from '../../constants/Layout';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    HomeWrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',

    },
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
        marginTop: CONTENT_PADDING_TOP,
        width,
        alignItems: 'center',
    },
    searchInput: {
        borderWidth: 1,
        borderRadius: 15,
        width: '95%',
        padding: 10
    }
})