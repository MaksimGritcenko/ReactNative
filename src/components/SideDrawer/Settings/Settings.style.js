import { StyleSheet } from "react-native";

import { CONTENT_PADDING_TOP } from '../../../constants/Layout';
import { darkOverlay } from '../../../constants/Colors';

export const styles = StyleSheet.create({
    Settings: {
        flex: 1,
        paddingTop: CONTENT_PADDING_TOP,
        backgroundColor: darkOverlay,
    },
    GeneralSettingsGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0, .2)',
        paddingHorizontal: 15,
        marginBottom: 1,
        paddingVertical: 15
    },
    GeneralSettingsGroupTitle: {
        color: '#fff'
    },
    GeneralSettingsGroupValue: {
      color: '#fff'
    },
    Title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15
    },
    LanguageBox: {
        position: 'absolute',
        top: '40%',
        backgroundColor: '#fff',
        zIndex: 1000,
        left: '25%',
        width: 200,
        height: 200,
    },
    LanguageBoxButton: {
        width: '100%',
        height: '50%',
        backgroundColor: darkOverlay,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LanguageBoxButtonTitle: {
        color: '#fff'
    },
    Divider: {
        height: 1
    },
    FontSizeBox: {
        position: 'absolute',
        top: '40%',
        backgroundColor: '#fff',
        zIndex: 1000,
        left: '25%',
        width: 200,
        height: 200,
    },
    FontSizeBoxButton: {
        width: '100%',
        height: '33%',
        backgroundColor: darkOverlay,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ChangePswBox: {
        position: 'absolute',
        top: '40%',
        backgroundColor: '#fff',
        zIndex: 1000,
        left: '5%',
        width: '90%',
        height: 200,
        alignItems: 'center'
    },
    ChangePswBoxInput: {
        borderWidth: 1,
        marginTop: 15,
        height: 40,
        width: '90%',
        paddingHorizontal: 10,
    },
    ChangePswBoxButton: {
        borderWidth: 1,
        width: '30%',
        height: 40,
        marginTop: 10,
        alignSelf: 'flex-end',
        marginRight: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
