import {
    Dimensions,
    StyleSheet
} from 'react-native';

import { CONTENT_PADDING_TOP } from '../../constants/Layout';
import { darkOverlay } from '../../constants/Colors';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    HomeWrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: darkOverlay,

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
        backgroundColor: 'rgba(100, 100, 100, .3)',
        borderRadius: 15,
        width: '95%',
        padding: 10
    }
});
