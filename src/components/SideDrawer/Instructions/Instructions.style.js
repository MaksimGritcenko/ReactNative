import { StyleSheet, Platform } from "react-native";

import { darkOverlay } from '../../../constants/Colors';

export const styles = StyleSheet.create({
    InstructionsWrapper: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: darkOverlay
    },
    InnerInstructionsWrapper: {
        marginTop: Platform.OS === 'ios' ? 30 : 90
    },
    Instructions: {
        padding: 30,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
});
